# Package Analysis & Optimization Guide

## Overview

This document provides a detailed analysis of all packages used in the Antdv Pro project, including estimated bundle sizes and optimization recommendations.

## Production Dependencies Analysis

### Core Framework (Essential - Keep)

| Package      | Version | Est. Size | Purpose               | Recommendation          | Alternatives                                       |
| ------------ | ------- | --------- | --------------------- | ----------------------- | -------------------------------------------------- |
| `vue`        | ^3.5.13 | ~34KB     | Core Vue.js framework | ✅ **Keep** - Essential | React (~42KB), Svelte (~10KB), Alpine.js (~15KB)   |
| `vue-router` | ^4.5.0  | ~12KB     | Vue routing           | ✅ **Keep** - Essential | Wouter (~2KB), Page.js (~5KB), Custom hash routing |
| `pinia`      | ^2.3.0  | ~8KB      | State management      | ✅ **Keep** - Essential | Vuex (~10KB), Zustand (~2KB), Custom composables   |

### UI Framework (Essential - Keep)

| Package                 | Version | Est. Size | Purpose                   | Recommendation         | Alternatives                                                                |
| ----------------------- | ------- | --------- | ------------------------- | ---------------------- | --------------------------------------------------------------------------- |
| `ant-design-vue`        | ^4.2.6  | ~280KB    | Main UI component library | ✅ **Keep** - Core UI  | Element Plus (~200KB), Quasar (~150KB), Vuetify (~180KB), Naive UI (~120KB) |
| `@ant-design/icons-vue` | ^7.0.1  | ~45KB     | Ant Design icons          | ✅ **Keep** - UI icons | Heroicons (~8KB), Lucide (~15KB), Tabler Icons (~12KB), Custom SVG icons    |

### Utility Libraries

| Package         | Version      | Est. Size | Purpose                   | Recommendation                              | Alternatives                                                     |
| --------------- | ------------ | --------- | ------------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| `@vueuse/core`  | ^10.11.1     | ~25KB     | Vue composition utilities | ✅ **Keep** - Very useful                   | Custom composables, Vue 3 built-ins, Vuelidate (~8KB)            |
| ~~`lodash-es`~~ | ~~^4.17.21~~ | ~~70KB~~  | ~~Utility functions~~     | ✅ **REMOVED** - Replaced with custom utils | Custom implementation in `/src/utils/tools.ts`                   |
| `dayjs`         | ^1.11.13     | ~3KB      | Date manipulation         | ✅ **Keep** - Lightweight                   | date-fns (~13KB modular), Luxon (~65KB), Native Date API         |
| `axios`         | ^1.7.9       | ~15KB     | HTTP client               | ✅ **Keep** - Standard choice               | Fetch API (native), ky (~11KB), ofetch (~4KB)                    |
| `mitt`          | ^3.0.1       | ~1KB      | Event emitter             | ✅ **Keep** - Tiny & useful                 | EventTarget (native), tiny-emitter (~1KB), Custom implementation |

### Internationalization

| Package    | Version | Est. Size | Purpose              | Recommendation               | Alternatives                                                     |
| ---------- | ------- | --------- | -------------------- | ---------------------------- | ---------------------------------------------------------------- |
| `vue-i18n` | ^9.14.2 | ~35KB     | Internationalization | ✅ **Keep** - If i18n needed | Fluent Vue (~8KB), Custom i18n (~2KB), Browser Intl API (native) |

### Visualization & Charts

| Package        | Version | Est. Size | Purpose                  | Recommendation                                   | Alternatives                                                                 |
| -------------- | ------- | --------- | ------------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| `@antv/g2plot` | ^2.4.32 | ~180KB    | Statistical charts       | ⚠️ **Evaluate** - Large, use if charts needed    | Chart.js (~60KB), Apache ECharts (~150KB), D3.js (~240KB), Recharts (~90KB)  |
| `@antv/l7`     | ^2.22.3 | ~250KB    | Geospatial visualization | ❌ **Consider Removing** - Very large, niche use | Leaflet (~40KB), Mapbox GL JS (~180KB), OpenLayers (~120KB), Google Maps API |

### Color & Styling

| Package           | Version | Est. Size | Purpose            | Recommendation               | Alternatives                                                        |
| ----------------- | ------- | --------- | ------------------ | ---------------------------- | ------------------------------------------------------------------- |
| `@ctrl/tinycolor` | ^4.1.0  | ~8KB      | Color manipulation | ✅ **Keep** - Small & useful | Chroma.js (~14KB), Color (~3KB), Culori (~25KB), Custom color utils |

### Utilities

| Package      | Version | Est. Size | Purpose                 | Recommendation              | Alternatives                                                     |
| ------------ | ------- | --------- | ----------------------- | --------------------------- | ---------------------------------------------------------------- |
| `@v-c/utils` | ^0.0.26 | ~5KB      | Vue component utilities | ✅ **Keep** - Small utility | Custom utility functions, @vueuse/shared (~3KB), Vue 3 built-ins |

## Development Dependencies Analysis

### Build Tools (Essential)

| Package       | Est. Size | Purpose                 | Recommendation               | Alternatives                                                  |
| ------------- | --------- | ----------------------- | ---------------------------- | ------------------------------------------------------------- |
| `@mistjs/cli` | ~15KB     | Build tool              | ✅ **Keep** - Core build     | Vite CLI, Custom build scripts, Nuxt CLI                      |
| `vite`        | ~8MB      | Build tool & dev server | ✅ **Keep** - Essential      | Webpack (~10MB), Rollup (~5MB), esbuild (~2MB), Parcel (~8MB) |
| `typescript`  | ~35MB     | TypeScript compiler     | ✅ **Keep** - Type safety    | Flow (~5MB), JSDoc comments, Vanilla JS                       |
| `vue-tsc`     | ~5MB      | Vue TypeScript checker  | ✅ **Keep** - Vue TS support | @vue/compiler-sfc, Custom type checking                       |

### Code Quality Tools

| Package                | Est. Size | Purpose             | Recommendation                  | Alternatives                                                   |
| ---------------------- | --------- | ------------------- | ------------------------------- | -------------------------------------------------------------- |
| `eslint`               | ~15MB     | Linting             | ✅ **Keep** - Code quality      | Biome (~5MB), JSHint (~2MB), Standard (~8MB), Rome (~10MB)     |
| `@antfu/eslint-config` | ~2MB      | ESLint config       | ✅ **Keep** - Good defaults     | @vue/eslint-config (~1MB), Airbnb config (~3MB), Custom config |
| `husky`                | ~500KB    | Git hooks           | ✅ **Keep** - Pre-commit checks | simple-git-hooks (~50KB), pre-commit (~1MB), lefthook (~5MB)   |
| `lint-staged`          | ~1MB      | Staged file linting | ✅ **Keep** - Efficient linting | nano-staged (~100KB), Custom git hooks, GitHub Actions         |

### Styling & CSS

| Package       | Est. Size | Purpose               | Recommendation                       | Alternatives                                                     |
| ------------- | --------- | --------------------- | ------------------------------------ | ---------------------------------------------------------------- |
| `unocss`      | ~3MB      | Atomic CSS engine     | ✅ **Keep** - Modern CSS             | Tailwind CSS (~5MB), Windi CSS (~2MB), Twind (~1MB), Vanilla CSS |
| `less`        | ~2MB      | CSS preprocessor      | ✅ **Keep** - Ant Design requirement | Sass (~3MB), Stylus (~1MB), PostCSS (~2MB), CSS-in-JS            |
| `antdv-style` | ~500KB    | Ant Design Vue styles | ✅ **Keep** - UI styling             | Custom CSS, Styled-components, Emotion (~1MB)                    |

### Testing

| Package           | Est. Size | Purpose               | Recommendation                    | Alternatives                                            |
| ----------------- | --------- | --------------------- | --------------------------------- | ------------------------------------------------------- |
| `vitest`          | ~8MB      | Testing framework     | ✅ **Keep** - Modern testing      | Jest (~12MB), Mocha (~2MB), Ava (~3MB), Cypress (~15MB) |
| `@vue/test-utils` | ~1MB      | Vue testing utilities | ✅ **Keep** - Vue testing         | Vue Testing Library (~500KB), Custom test helpers       |
| `jsdom`           | ~3MB      | DOM simulation        | ✅ **Keep** - Testing environment | Happy-dom (~1MB), Playwright (~20MB), Puppeteer (~10MB) |

## Optimization Recommendations

### 🔴 High Priority Optimizations

1. **Remove `@antv/l7` (~250KB)** if geospatial visualization is not used

   ```bash
   npm uninstall @antv/l7
   ```

   **Alternative**: Use lighter mapping libraries like Leaflet if needed

2. **~~Optimize `lodash-es` usage~~** ✅ **COMPLETED**
   - ✅ Removed lodash-es dependency (-70KB)
   - ✅ Implemented custom `cloneDeep` and `get` functions in `/src/utils/tools.ts`

3. **Evaluate `@antv/g2plot` (~180KB)**
   - Remove if charts are not extensively used
   - **Alternative**: Chart.js (~60KB) or Apache ECharts (~150KB)

### 🟡 Medium Priority Optimizations

1. **Bundle Analysis**

   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

   Add to vite.config.ts to analyze actual bundle sizes

2. **Tree Shaking Optimization**
   - Ensure all imports are ES modules
   - Use dynamic imports for large components

3. **Code Splitting**
   ```javascript
   // Example: Lazy load chart components
   const ChartComponent = defineAsyncComponent(() => import("./ChartComponent.vue"));
   ```

### 🟢 Low Priority Optimizations

1. **Development Dependencies Cleanup**
   - Remove unused type packages
   - Consolidate similar tools

2. **Alternative Considerations**
   - `axios` → `fetch` (native, 0KB)
   - `dayjs` → `date-fns` (more modular)
   - `vue-i18n` → Remove if single language

## Bundle Size Estimates

### Current Production Bundle

- **Estimated Total**: ~750KB (gzipped: ~250KB)
- **Core Framework**: ~54KB
- **UI Components**: ~325KB
- **Charts/Visualization**: ~430KB
- **Utilities**: ~90KB

### After Optimization

- **Optimized Total**: ~320KB (gzipped: ~110KB)
- **Savings**: ~430KB (-57%)

## Implementation Steps

1. **Audit Usage**

   ```bash
   # Check if packages are actually used
   npx depcheck
   ```

2. **Remove Unused Packages**

   ```bash
   npm uninstall @antv/l7  # If not using maps
   npm uninstall @antv/g2plot  # If not using charts
   ```

3. **Optimize Imports**

   ```bash
   # Instead of importing the entire library
   # ✅ COMPLETED: Removed lodash-es dependency
   # Now using custom utilities from /src/utils/tools.ts
   import { cloneDeep, get } from '@/utils/tools'
   ```

4. **Add Bundle Analyzer**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

## Monitoring

- Use `npm ls` to check dependency tree
- Monitor bundle size with CI/CD
- Regular dependency audits with `npm audit`
- Update dependencies monthly

## Detailed Alternatives Analysis

### 🎯 **Top Alternative Recommendations**

#### UI Framework Alternatives

| Alternative      | Bundle Size | Migration Effort | Pros                                          | Cons                               |
| ---------------- | ----------- | ---------------- | --------------------------------------------- | ---------------------------------- |
| **Naive UI**     | ~120KB      | Medium           | Smaller, TypeScript-first, Vue 3 optimized    | Smaller ecosystem, fewer themes    |
| **Element Plus** | ~200KB      | Low              | Similar API, good docs, active community      | Still large, design limitations    |
| **Quasar**       | ~150KB      | High             | Full framework, mobile support, rich features | Learning curve, opinionated        |
| **Vuetify**      | ~180KB      | Medium           | Material Design, comprehensive                | Vue 2 legacy, migration complexity |

#### Chart Library Alternatives

| Alternative        | Bundle Size | Migration Effort | Pros                               | Cons                                 |
| ------------------ | ----------- | ---------------- | ---------------------------------- | ------------------------------------ |
| **Chart.js**       | ~60KB       | Low              | Lightweight, simple API, good docs | Limited chart types                  |
| **Apache ECharts** | ~150KB      | Medium           | Feature-rich, good performance     | Large size, complex API              |
| **Recharts**       | ~90KB       | Medium           | React-like API, composable         | React-focused, Vue adaptation needed |
| **D3.js**          | ~240KB      | High             | Ultimate flexibility, powerful     | Steep learning curve, complex        |

#### HTTP Client Alternatives

| Alternative   | Bundle Size  | Migration Effort | Pros                             | Cons                                 |
| ------------- | ------------ | ---------------- | -------------------------------- | ------------------------------------ |
| **Fetch API** | 0KB (native) | Low              | No dependencies, modern browsers | Less features, manual error handling |
| **ky**        | ~11KB        | Low              | Modern, TypeScript, retry logic  | Smaller feature set                  |
| **ofetch**    | ~4KB         | Low              | Nuxt-compatible, auto-retry      | Newer, smaller ecosystem             |

### 🔄 **Migration Strategies**

#### Replacing Ant Design Vue

```bash
# 1. Install alternative (example: Naive UI)
npm install naive-ui
npm uninstall ant-design-vue @ant-design/icons-vue

# 2. Update main.ts
# Replace Ant Design imports with Naive UI
# Update component registrations

# 3. Component migration
# a-button → n-button
# a-input → n-input
# Update all component references
```

#### Replacing Chart Libraries

```bash
# Remove AntV libraries
npm uninstall @antv/g2plot @antv/l7

# Install Chart.js (lightweight option)
npm install chart.js vue-chartjs

# Update chart components
# Replace G2Plot syntax with Chart.js
```

#### Optimizing Lodash Usage

```bash
# Option 1: Replace with native methods
# _.debounce → Custom debounce function
# _.cloneDeep → structuredClone (native)
# _.isEmpty → Object.keys(obj).length === 0

# Option 2: Use specific imports
# ✅ COMPLETED: Custom implementation
# See /src/utils/tools.ts for cloneDeep and get functions

# ✅ COMPLETED: Removed lodash-es
# npm uninstall lodash-es (already done)
```

### 📊 **Decision Matrix**

#### When to Switch UI Frameworks

- ✅ **Switch to Naive UI** if: TypeScript-first, smaller bundle priority
- ✅ **Switch to Element Plus** if: Easy migration, similar API needed
- ❌ **Keep Ant Design Vue** if: Design consistency, extensive customization

#### When to Replace Chart Libraries

- ✅ **Switch to Chart.js** if: Simple charts, bundle size critical
- ✅ **Switch to ECharts** if: Complex visualizations, performance critical
- ❌ **Keep AntV** if: Advanced statistical charts, data analysis focus

### 🎨 **Custom Implementation Alternatives**

#### Custom Icon System (Replace @ant-design/icons-vue)

```typescript
// Create custom icon component
// Use SVG sprites or icon fonts
// Reduce from 45KB to ~5KB
```

#### Custom HTTP Client (Replace axios)

```typescript
// Wrapper around fetch API
// Add interceptors, error handling
// Reduce from 15KB to ~2KB custom implementation
```

#### Custom Date Utils (Replace dayjs)

```typescript
// Use native Intl API
// Custom formatting functions
// Reduce from 3KB to ~0.5KB
```

### 🚀 **Progressive Migration Plan**

#### Phase 1: Low-Risk Optimizations (Week 1)

1. Replace `@antv/l7` with Leaflet (-210KB)
2. Optimize lodash imports (-40KB)
3. Replace mitt with EventTarget (-1KB)

#### Phase 2: Medium-Risk Changes (Week 2-3)

1. Replace `@antv/g2plot` with Chart.js (-120KB)
2. Replace axios with ky (-4KB)
3. Custom icon implementation (-35KB)

#### Phase 3: High-Risk Changes (Week 4-6)

1. Evaluate UI framework replacement (-80KB to -160KB)
2. Custom utility implementations (-20KB)
3. Remove vue-i18n if single language (-35KB)

### 📈 **Expected Outcomes by Phase**

| Phase     | Bundle Reduction  | Risk Level | Time Investment |
| --------- | ----------------- | ---------- | --------------- |
| Phase 1   | -251KB (-33%)     | Low        | 1 week          |
| Phase 2   | -159KB (-21%)     | Medium     | 2-3 weeks       |
| Phase 3   | -115KB (-15%)     | High       | 3-6 weeks       |
| **Total** | **-525KB (-70%)** | **Mixed**  | **6-10 weeks**  |

## Conclusion

The current package setup is comprehensive but offers significant optimization opportunities:

### 🎯 **Immediate Actions (High Impact, Low Risk)**

1. Remove `@antv/l7` if geospatial features unused (-250KB)
2. ✅ Removed lodash-es completely (-70KB)
3. Replace large chart library with Chart.js (-120KB)

### 🔄 **Medium-term Considerations**

1. Evaluate UI framework alternatives for future projects
2. Implement custom utilities for common functions
3. Consider micro-frontend architecture for large applications

### 📊 **Final Bundle Estimates**

- **Current**: ~750KB (gzipped: ~250KB)
- **After Phase 1**: ~499KB (gzipped: ~166KB) - **33% reduction**
- **After All Phases**: ~225KB (gzipped: ~75KB) - **70% reduction**

This analysis provides a roadmap for **systematic optimization** while maintaining functionality and minimizing migration risks.
