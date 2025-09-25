# Component Structure Documentation

## 📁 Folder Organization

### `/components/` - All React components

- **`ui/`** - Reusable UI components (buttons, cards, spinners)
- **`layout/`** - Layout components (header, footer)
- **`sections/`** - Page section components (hero, about, products, etc.)

### `/hooks/` - Custom React hooks

- **`useLoading.ts`** - Loading state management
- **`useContactForm.ts`** - Contact form state and validation

### `/types/` - TypeScript type definitions

- **`index.ts`** - All type interfaces and props

### `/constants/` - Static data and configuration

- **`products.ts`** - Product data and categories
- **`company.ts`** - Company information and content

## 🧩 Component Descriptions

### UI Components (`/components/ui/`)

#### `Button.tsx`

- **Purpose:** Reusable button with multiple variants
- **Props:** variant, size, onClick, href, type
- **Variants:** primary, secondary, outline, accent
- **Sizes:** sm, md, lg

#### `Card.tsx`

- **Purpose:** Consistent card container with hover effects
- **Props:** children, className, hover
- **Features:** Brand-consistent styling, hover animations

#### `LoadingSpinner.tsx`

- **Purpose:** Loading indicator with customizable size and text
- **Props:** size, text, className
- **Sizes:** sm, md, lg

### Layout Components (`/components/layout/`)

#### `Header.tsx`

- **Purpose:** Main navigation header
- **Features:** Logo, navigation links, CTA button
- **Data Source:** `NAV_LINKS` from constants

#### `Footer.tsx`

- **Purpose:** Site footer with links and company info
- **Features:** Company info, product links, contact details
- **Data Source:** `COMPANY_INFO` from constants

### Section Components (`/components/sections/`)

#### `HeroSection.tsx`

- **Purpose:** Main hero section with video placeholder
- **Features:** Video background, key messaging, CTAs
- **Data Source:** `HERO_CONTENT` from constants

#### `AboutSection.tsx`

- **Purpose:** Company story and statistics
- **Features:** Company stats grid, heritage story
- **Data Source:** `COMPANY_STATS`, `ABOUT_CONTENT` from constants

#### `ProductsSection.tsx`

- **Purpose:** Product showcase with categories
- **Features:** Non-alcoholic and alcoholic product grids
- **Data Source:** `NON_ALCOHOLIC_PRODUCTS`, `ALCOHOLIC_PRODUCTS` from constants

#### `ProductCard.tsx`

- **Purpose:** Individual product display card
- **Props:** product object
- **Features:** Product icon, description, launch year

#### `VirtualToursSection.tsx`

- **Purpose:** Virtual tour options display
- **Features:** Winery and brewery tour cards
- **Data Source:** `VIRTUAL_TOURS` from constants

#### `ContactSection.tsx`

- **Purpose:** Contact form and company information
- **Features:** Form validation, contact details
- **Hooks:** Uses `useContactForm` hook

## 🎣 Custom Hooks (`/hooks/`)

#### `useLoading.ts`

- **Purpose:** Loading state management with timeout
- **Returns:** loading state, setLoading function
- **Usage:** Automatic loading completion after duration

#### `useContactForm.ts`

- **Purpose:** Contact form state and validation
- **Returns:** form data, errors, handlers, validation
- **Features:** Form validation, submission handling

## 📊 Data Structure (`/constants/`)

#### `products.ts`

- **Purpose:** Product data and categories
- **Exports:** `NON_ALCOHOLIC_PRODUCTS`, `ALCOHOLIC_PRODUCTS`, `ALL_PRODUCTS`
- **Structure:** Product objects with id, name, description, category, etc.

#### `company.ts`

- **Purpose:** Company information and content
- **Exports:** `COMPANY_STATS`, `VIRTUAL_TOURS`, `NAV_LINKS`, `COMPANY_INFO`, etc.
- **Structure:** Various data objects for different sections

## 🔧 Type Definitions (`/types/`)

#### `index.ts`

- **Purpose:** TypeScript interfaces and type definitions
- **Exports:** Product, CompanyStat, VirtualTour, ContactFormData, etc.
- **Usage:** Type safety across all components

## 📱 Main Page (`/app/page.tsx`)

#### `Home` Component

- **Purpose:** Main landing page orchestrator
- **Features:** Loading state, component composition
- **Structure:** Imports all sections and layouts, handles loading

## 🎯 Benefits of This Structure

### **Clear Separation of Concerns**

- UI components are reusable and focused
- Layout components handle page structure
- Section components handle specific content areas

### **Easy Maintenance**

- Each component has a single responsibility
- Data is centralized in constants
- Types are defined once and reused

### **Scalability**

- Easy to add new components
- Simple to modify existing functionality
- Clear patterns for new developers

### **Type Safety**

- All props are typed
- Data structures are consistent
- IDE support and error prevention

### **Reusability**

- Components can be used across pages
- Hooks can be shared between components
- Constants prevent data duplication

## 🚀 Usage Examples

```tsx
// Using a UI component
import { Button } from "@/components/ui";
<Button variant="primary" size="lg">
  Click me
</Button>;

// Using a section component
import { HeroSection } from "@/components/sections";
<HeroSection />;

// Using a custom hook
import { useLoading } from "@/hooks";
const { loading } = useLoading(2000);

// Using constants
import { COMPANY_INFO } from "@/constants";
console.log(COMPANY_INFO.name);
```

This structure makes the codebase maintainable, scalable, and easy to understand for any developer working on the project.
