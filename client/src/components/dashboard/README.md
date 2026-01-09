# Tailwind CSS Dashboard Components

This directory contains modular, reusable components for the MOPTro Dashboard built with Tailwind CSS.

## 📁 Structure

```
components/dashboard/
├── common/           # Shared layout components
│   ├── Sidebar.jsx   # Navigation sidebar
│   └── TopNav.jsx    # Top navigation bar
├── cards/            # Dashboard card components
│   ├── ProfileCard.jsx
│   ├── MOPTroInfoCard.jsx
│   ├── UtilizationCard.jsx
│   ├── PlatformSettingsCard.jsx
│   └── ProductsCard.jsx
└── index.js         # Component exports
```

## 🎨 Components Overview

### Common Components

#### Sidebar
- Navigation menu with Dashboard and Teams sections
- Account pages (Profile, Sign In, Sign Up)
- Logout functionality
- Active state highlighting
- Fixed positioning on the left

**Props:**
- `onLogout` (function): Callback for logout action

#### TopNav
- Page title and breadcrumb
- Search bar with icon
- Notification indicator
- Settings icon
- User action buttons
- Fixed positioning at the top

**Props:**
- `user` (object): User information

### Card Components

#### ProfileCard
- User avatar with status indicator
- User name and email display
- Edit profile button
- Three action buttons (Overview, Teams, Projects)
- Gradient background with border

**Props:**
- `user` (object): User data with name and email

#### MOPTroInfoCard
- Circular progress indicator for battery charge
- Charge time display
- Four metric cards:
  - Happy Users (percentage with trend)
  - Performance (percentage with trend)
  - Efficiency (with mini trend chart)
  - Consumption (with mini trend chart)
- Gradient background and icons

**Props:** None (uses internal data)

#### UtilizationCard
- Weekly utilization bar chart
- Percentage change from last week
- Four statistics:
  - Wallet amount
  - Average Range (km)
  - Consumables Cost
  - Maintenance Cost
- Icon indicators for each stat

**Props:**
- `data` (array): Weekly utilization data for chart

#### PlatformSettingsCard
- Two sections: Application and Updates
- Toggle switches for each setting
- Settings include:
  - Email notifications
  - Product updates
  - Newsletter subscription
- Footer with copyright

**Props:** None (uses internal state)

#### ProductsCard
- Grid layout of three products (WASP, SNAIL, E-Vehicle)
- Product images (emoji placeholders)
- Product descriptions
- Info buttons for each product
- Marketplace link
- Blog and License links

**Props:** None (uses internal data)

## 🎯 Usage Example

```jsx
import { 
  Sidebar, 
  TopNav, 
  ProfileCard, 
  MOPTroInfoCard,
  UtilizationCard,
  PlatformSettingsCard,
  ProductsCard
} from '../../components/dashboard';

function Dashboard() {
  const user = { name: 'Mark Johnson', email: 'mark@example.com' };
  const utilizationData = [65, 80, 70, 90, 85, 75, 95];

  return (
    <div className="min-h-screen bg-primary">
      <Sidebar onLogout={handleLogout} />
      <div className="ml-64">
        <TopNav user={user} />
        <div className="pt-16 p-6">
          <ProfileCard user={user} />
          <div className="grid grid-cols-2 gap-6">
            <MOPTroInfoCard />
            <UtilizationCard data={utilizationData} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <PlatformSettingsCard />
            <ProductsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 🎨 Design Tokens

Components use Tailwind's custom theme configuration:

### Colors
- `bg-primary`: #0a0e27 (main background)
- `bg-primary-light`: #1a1f3a (sidebar/nav background)
- `bg-secondary`: #1e2442 (card background)
- `bg-accent-blue`: #4d7cff (primary actions)
- `bg-accent-purple`: #7c3aed (secondary accents)
- `text-white`: #ffffff (primary text)
- `text-text-secondary`: #a8b3cf (secondary text)
- `text-text-muted`: #6b7280 (muted text)

### Effects
- `shadow-card`: Card shadow effect
- `shadow-glow`: Blue glow effect
- `shadow-glow-purple`: Purple glow effect
- `bg-gradient-primary`: Blue to purple gradient
- `border-border`: Subtle border color

### Spacing & Layout
- Standard padding: `p-6`
- Card gaps: `gap-6`
- Sidebar width: `w-64`
- Top nav height: `h-16`

## 🔧 Customization

### Modifying Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ...
    }
  }
}
```

### Adding New Components
1. Create component in appropriate directory (`common/` or `cards/`)
2. Export from `index.js`
3. Follow existing patterns for props and styling

### Responsive Design
Components use Tailwind's responsive utilities:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## 📦 Dependencies

- React 19.2.0
- Tailwind CSS 3.x
- react-icons 5.5.0
- Chart.js 4.5.1
- react-chartjs-2 5.3.1

## 🚀 Best Practices

1. **Component Isolation**: Each component manages its own state
2. **Prop Drilling**: Avoid deep prop drilling; use context for global state
3. **Tailwind Classes**: Use Tailwind utilities over custom CSS
4. **Responsive First**: Design mobile-first with responsive breakpoints
5. **Accessibility**: Include ARIA labels and keyboard navigation
6. **Performance**: Lazy load heavy components when needed

## 🧪 Testing

Components can be tested individually:
```jsx
import { render } from '@testing-library/react';
import { ProfileCard } from './cards/ProfileCard';

test('renders user name', () => {
  const user = { name: 'Test User', email: 'test@example.com' };
  const { getByText } = render(<ProfileCard user={user} />);
  expect(getByText('Test User')).toBeInTheDocument();
});
```

## 📝 Notes

- All components follow the Adobe UI/UX design specifications
- Components are fully responsive and mobile-friendly
- Dark theme is the default and only theme
- Icon library (react-icons/fi) is used for consistency
- Charts are integrated using Chart.js for data visualization

## 🔗 Related Files

- `/pages/dashboard/NewDashboard.jsx` - Main dashboard layout
- `/tailwind.config.js` - Tailwind configuration
- `/charts/` - Chart components for data visualization
