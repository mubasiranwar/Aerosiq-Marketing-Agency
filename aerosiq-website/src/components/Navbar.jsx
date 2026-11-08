
import React, { useState } from 'react';
import {
  Menu,
  Button,
  Drawer,
  Grid,
  Typography,
  Divider,
} from 'antd';

import {
  MenuOutlined,
  ExportOutlined,
  CloseOutlined,
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  TeamOutlined,
  MailOutlined,
} from '@ant-design/icons';

import { siteConfig } from '../data/siteData';

const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  const navItems = [
    { key: '#home', icon: <HomeOutlined />, label: 'Home' },
    { key: '#services', icon: <AppstoreOutlined />, label: 'Services' },
    { key: '#about', icon: <InfoCircleOutlined />, label: 'About Us' },
    { key: '#leadership', icon: <TeamOutlined />, label: 'Leadership' },
    { key: '#contact', icon: <MailOutlined />, label: 'Contact' },
  ];

  const handleNavigation = (key) => {
    window.location.hash = key;
    setOpen(false);
  };

  const menuItems = navItems.map((item) => ({
    ...item,
    onClick: () => handleNavigation(item.key),
  }));

  return (
    <>
      <style>{`
        .amazon-navbar {
          --nav-bg: #faf9f6;
          --nav-text: #20201e;
          --nav-muted: #77746e;
          --nav-accent: #ed941c;
          --nav-border: rgba(32, 32, 30, 0.09);

          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          height: 78px;
          padding: 0 3% !important;
          line-height: normal !important;
          background: rgba(250, 249, 246, 0.94) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: 0 3px 18px rgba(32, 32, 30, 0.035);
        }

        .amazon-nav-inner {
          max-width: 1440px;
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        /* BRAND */

        .amazon-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none !important;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .brand-symbol {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f5a638, #ed941c);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          box-shadow: 0 4px 12px rgba(237, 148, 28, 0.18);
          transition: transform 0.3s ease;
        }

        .amazon-brand:hover .brand-symbol {
          transform: rotate(-5deg) scale(1.05);
        }

        .brand-symbol span {
          width: 4px;
          border-radius: 5px;
          background: #fff;
        }

        .brand-symbol span:nth-child(1) { height: 12px; }
        .brand-symbol span:nth-child(2) { height: 21px; }
        .brand-symbol span:nth-child(3) { height: 15px; }

        .brand-name {
          color: var(--nav-text) !important;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.6px;
        }

        /* DESKTOP NAVIGATION */

        .desktop-navigation {
          flex: 1;
          display: flex;
          justify-content: center;
          min-width: 0;
        }

        .amazon-menu {
          background: transparent !important;
          border-bottom: none !important;
          display: flex;
          justify-content: center;
        }

        .amazon-menu .ant-menu-item {
          color: var(--nav-muted) !important;
          font-size: 13px;
          font-weight: 600;
          margin: 0 4px !important;
          padding-inline: 13px !important;
          height: 78px !important;
          line-height: 78px !important;
          transition: color 0.25s ease;
        }

        .amazon-menu .ant-menu-item:hover {
          color: var(--nav-accent) !important;
        }

        .amazon-menu .ant-menu-item-selected {
          color: var(--nav-accent) !important;
          font-weight: 750;
          background: transparent !important;
        }

        .amazon-menu .ant-menu-item-selected::after {
          border-bottom: 2px solid var(--nav-accent) !important;
          border-radius: 4px 4px 0 0;
        }

        .amazon-menu .ant-menu-item .anticon {
          font-size: 13px;
        }

        .amazon-menu .ant-menu-item::after {
          transition: border-color 0.25s ease;
        }

        /* CTA BUTTON */

        .nav-action {
          flex-shrink: 0;
        }

        .amazon-cta {
          height: 43px !important;
          padding: 0 20px !important;
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border: 1px solid var(--nav-accent) !important;
          border-radius: 7px !important;
          background: var(--nav-accent) !important;
          color: #fff !important;
          font-size: 13px !important;
          font-weight: 750 !important;
          box-shadow: 0 4px 12px rgba(237, 148, 28, 0.13);
          transition: all 0.3s ease !important;
        }

        .amazon-cta:hover {
          transform: translateY(-2px);
          background: #d9810c !important;
          border-color: #d9810c !important;
          color: #fff !important;
          box-shadow: 0 7px 18px rgba(237, 148, 28, 0.22);
        }

        .amazon-cta .anticon {
          font-size: 13px;
          transition: transform 0.25s ease;
        }

        .amazon-cta:hover .anticon {
          transform: translate(2px, -2px);
        }

        /* MOBILE MENU BUTTON */

        .mobile-menu-button {
          color: var(--nav-text) !important;
          font-size: 21px !important;
          width: 42px;
          height: 42px;
          border-radius: 8px !important;
          transition: all 0.25s ease;
        }

        .mobile-menu-button:hover {
          color: var(--nav-accent) !important;
          background: rgba(237, 148, 28, 0.09) !important;
        }

        /* MOBILE DRAWER */

        .amazon-mobile-drawer .ant-drawer-content {
          background: var(--nav-bg);
        }

        .amazon-mobile-drawer .ant-drawer-header {
          background: var(--nav-bg);
          border-bottom: 1px solid var(--nav-border);
          padding: 22px;
        }

        .amazon-mobile-drawer .ant-drawer-title {
          color: var(--nav-text);
        }

        .amazon-mobile-drawer .ant-drawer-close {
          color: var(--nav-muted);
          transition: color 0.2s ease;
        }

        .amazon-mobile-drawer .ant-drawer-close:hover {
          color: var(--nav-accent);
        }

        .amazon-mobile-drawer .ant-drawer-body {
          background: var(--nav-bg);
          padding: 22px;
        }

        .drawer-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--nav-text);
          font-size: 17px;
          font-weight: 800;
        }

        .mobile-navigation-menu {
          border: none !important;
          background: transparent !important;
        }

        .mobile-navigation-menu .ant-menu-item {
          height: 49px !important;
          line-height: 49px !important;
          margin: 6px 0 !important;
          padding-inline: 14px !important;
          border-radius: 8px;
          color: var(--nav-muted) !important;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .mobile-navigation-menu .ant-menu-item:hover {
          color: var(--nav-accent) !important;
          background: rgba(237, 148, 28, 0.07) !important;
        }

        .mobile-navigation-menu .ant-menu-item-selected {
          color: var(--nav-accent) !important;
          background: rgba(237, 148, 28, 0.11) !important;
          font-weight: 750;
        }

        .mobile-navigation-menu .ant-menu-item .anticon {
          font-size: 15px;
        }

        .amazon-mobile-drawer .ant-divider {
          border-color: var(--nav-border) !important;
          margin: 23px 0;
        }

        .mobile-drawer-cta {
          height: 47px !important;
          justify-content: center;
        }

        /* RESPONSIVE */

        @media (max-width: 767px) {
          .amazon-navbar {
            height: 68px;
            padding: 0 4% !important;
          }

          .amazon-nav-inner {
            gap: 10px;
          }

          .brand-name {
            font-size: 16px;
          }

          .brand-symbol {
            width: 35px;
            height: 35px;
          }

          .amazon-cta {
            height: 39px !important;
            padding: 0 13px !important;
            font-size: 12px !important;
          }
        }

        @media (max-width: 380px) {
          .brand-name {
            font-size: 14px;
          }

          .amazon-nav-inner {
            gap: 5px;
          }

          .amazon-cta {
            padding: 0 10px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .amazon-navbar *,
          .amazon-navbar *::before,
          .amazon-navbar *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className="amazon-navbar">
        <div className="amazon-nav-inner">

          {/* BRAND */}
          <a href="#home" className="amazon-brand">
            <div className="brand-symbol">
              <span />
              <span />
              <span />
            </div>

            <Text className="brand-name">
              {siteConfig.name}
            </Text>
          </a>

          {/* DESKTOP NAVIGATION */}
          {screens.md && (
            <nav className="desktop-navigation" aria-label="Main navigation">
              <Menu
                mode="horizontal"
                selectedKeys={['#home']}
                items={menuItems}
                className="amazon-menu"
              />
            </nav>
          )}

          {/* CTA */}
          <div className="nav-action">
            <Button
              href="#contact"
              className="amazon-cta"
              type="primary"
            >
              Let's Talk
              <ExportOutlined />
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          {!screens.md && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              className="mobile-menu-button"
              aria-label="Open navigation"
            />
          )}

        </div>
      </header>

      {/* MOBILE DRAWER */}
      <Drawer
        title={
          <div className="drawer-brand">
            <div className="brand-symbol">
              <span />
              <span />
              <span />
            </div>
            {siteConfig.name}
          </div>
        }
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={<CloseOutlined />}
        className="amazon-mobile-drawer"
        width={320}
      >
        <Menu
          mode="vertical"
          items={navItems}
          selectedKeys={['#home']}
          onClick={({ key }) => handleNavigation(key)}
          className="mobile-navigation-menu"
        />

        <Divider />

        <Button
          type="primary"
          block
          href="#contact"
          onClick={() => setOpen(false)}
          className="amazon-cta mobile-drawer-cta"
        >
          Let's Talk <ExportOutlined />
        </Button>
      </Drawer>
    </>
  );
}
