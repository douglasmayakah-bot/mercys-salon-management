import React, { useState } from 'react';
import {
  LayoutDashboard, Scissors, Package, Users,
  ShoppingCart, Wallet, Menu, Search, Bell,
  Plus, Sparkles
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Services', icon: Scissors },
  { name: 'Products', icon: Package },
  { name: 'Customers', icon: Users },
  { name: 'Sales', icon: ShoppingCart },
  { name: 'Expenses', icon: Wallet }
];

export default function App() {
  const [active, setActive] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    { title: 'Total Sales', value: 'KSh 0', icon: ShoppingCart },
    { title: 'Customers', value: '0', icon: Users },
    { title: 'Services', value: '0', icon: Scissors },
    { title: 'Products', value: '0', icon: Package }
  ];

  return (
    <div className="app">
      <aside className={`sidebar ${menuOpen ? 'show' : ''}`}>
        <div className="brand">
          <div className="brand-icon"><Sparkles size={22} /></div>
          <div>
            <h2>Mercy's Salon</h2>
            <span>AND COSMETIC</span>
          </div>
        </div>

        <p className="menu-label">MAIN MENU</p>

        {navigation.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`nav-link ${active === item.name ? 'active' : ''}`}
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
              }}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}

        <div className="sidebar-bottom">
          <Sparkles size={18} />
          <span>Beauty. Care. Confidence.</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={23} />
          </button>

          <div className="page-heading">
            <h1>{active}</h1>
            <p>Welcome to Mercy's Salon Management System</p>
          </div>

          <div className="top-actions">
            <button className="icon-button"><Search size={19} /></button>
            <button className="icon-button"><Bell size={19} /></button>
            <div className="profile">M</div>
          </div>
        </header>

        {active === 'Dashboard' ? (
          <section className="content">
            <div className="welcome">
              <div>
                <span className="eyebrow">SALON OVERVIEW</span>
                <h2>Welcome to Mercy's Salon</h2>
                <p>Manage your salon, beauty services and cosmetics in one place.</p>
              </div>
              <div className="welcome-icon"><Sparkles size={42} /></div>
            </div>

            <div className="section-title">
              <div>
                <h2>Business Overview</h2>
                <p>Here is a summary of your salon activities.</p>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map(item => {
                const Icon = item.icon;
                return (
                  <div className="stat-card" key={item.title}>
                    <div className="stat-icon"><Icon size={21} /></div>
                    <p>{item.title}</p>
                    <h3>{item.value}</h3>
                  </div>
                );
              })}
            </div>

            <div className="section-title">
              <div>
                <h2>Quick Access</h2>
                <p>Choose what you want to manage.</p>
              </div>
            </div>

            <div className="quick-grid">
              {navigation.slice(1).map(item => {
                const Icon = item.icon;
                return (
                  <button className="quick-card" key={item.name}
                    onClick={() => setActive(item.name)}>
                    <Icon size={23} />
                    <span>{item.name}</span>
                    <Plus size={17} />
                  </button>
                );
              })}
            </div>

            <div className="recent-card">
              <h2>Recent Activity</h2>
              <p>Your recent sales and business activities will appear here.</p>
              <div className="empty-state">
                <ShoppingCart size={30} />
                <span>No activity recorded yet.</span>
              </div>
            </div>
          </section>
        ) : (
          <section className="content">
            <div className="section-title">
              <div>
                <h2>Manage {active}</h2>
                <p>Keep your {active.toLowerCase()} information organised.</p>
              </div>
              <button className="add-button">
                <Plus size={18} /> Add {active.slice(0, -1)}
              </button>
            </div>

            <div className="recent-card empty-page">
              <div className="empty-state">
                <Sparkles size={32} />
                <h3>{active} management</h3>
                <p>This section is ready for your records. We will connect it to your database next.</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
