
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // DocuSeal configuration
    const apiKey = process.env.DOCUSEAL_API_KEY;
    const templateId = Number(process.env.DOCUSEAL_TEMPLATE_ID);

    if (!apiKey || !templateId) {
      return res.status(500).json({
        success: false,
        message: "DocuSeal configuration is missing.",
      });
    }

    // Customer information
    const {
      fullName,
      fatherName,
      cnic,
      contactNumber,
      email,
      residentialAddress,
      totalAmount,
    } = req.body || {};

    // Validate required information
    if (
      !fullName ||
      !fatherName ||
      !cnic ||
      !contactNumber ||
      !email ||
      !residentialAddress ||
      totalAmount === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required information.",
      });
    }

    // Validate service amount
    const amount = Number(totalAmount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid service amount.",
      });
    }

    // Calculate payment structure: 25% / 75%
    const advanceAmount = Number((amount * 0.25).toFixed(2));
    const remainingAmount = Number((amount * 0.75).toFixed(2));

    // Create a new agreement from the existing template
    const response = await fetch(
      "https://api.docuseal.com/submissions",
      {
        method: "POST",
        headers: {
          "X-Auth-Token": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          template_id: templateId,
          send_email: true,

          submitters: [
            {
              role: "Client",
              name: fullName.trim(),
              email: email.trim(),

              fields: [
                {
                  name: "Full Name",
                  default_value: fullName.trim(),
                  readonly: true,
                },
                {
                  name: "Father's Name",
                  default_value: fatherName.trim(),
                  readonly: true,
                },
                {
                  name: "ID Number",
                  default_value: cnic.trim(),
                  readonly: true,
                },
                {
                  name: "Contact Number",
                  default_value: contactNumber.trim(),
                  readonly: true,
                },
                {
                  name: "Email Address",
                  default_value: email.trim(),
                  readonly: true,
                },
                {
                  name: "Residential Address",
                  default_value: residentialAddress.trim(),
                  readonly: true,
                },
              ],
            },
          ],
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("DocuSeal API error:", result);

      return res.status(502).json({
        success: false,
        message: "Failed to create the agreement.",
      });
    }

    // Get the customer's unique signing link
    const signer = Array.isArray(result) ? result[0] : null;

    if (!signer?.embed_src) {
      return res.status(502).json({
        success: false,
        message: "Agreement created but signing link was not returned.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Agreement created successfully.",
      signingUrl: signer.embed_src,
      paymentDetails: {
        totalAmount: amount,
        advanceAmount,
        remainingAmount,
      },
    });

  } catch (error) {
    console.error("Agreement creation error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the agreement.",
    });
  }
}
