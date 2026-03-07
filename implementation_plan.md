# Portfolio Website Modernization & Color Theme Refactoring

Comprehensive modernization of the Khamsy portfolio website: establishing a centralized CSS color theme system, refactoring all hardcoded colors to use theme variables, cleaning up dead code and duplicates, and polishing UI to a modern standard.

## Proposed Changes

### Phase 1: Theme System & CSS Foundation

#### [MODIFY] [index.css](file:///d:/2025/DEV/Khamsy/src/index.css)

**Establish a complete CSS custom property theme system.** The current file has a commented-out `:root` / `.dark` block that was never activated. We will replace it with a polished, modern color palette using a **purple/violet** accent (matching the existing `bg-purple-600` usage in contact buttons), and register the tokens via TailwindCSS v4's `@theme` directive.

Color palette strategy:
- **Primary accent**: Purple/Violet (`hsl(270, 76%, 52%)`)  
- **Background**: Warm white → deep charcoal for dark mode
- **Surface/Card**: Subtle gray → dark neutral
- **Text**: Near-black → near-white
- **Muted**: Medium gray tones
- **Border**: Light separator → dark separator
- **Accent badge**: Emerald for secondary highlights

The theme variables will be consumed via Tailwind's theme utilities (e.g., `bg-[var(--background)]` → mapped to `bg-background` via `@theme`).

Also adds `scroll-behavior: smooth` globally and cleans up commented-out code.

---

### Phase 2: Code Cleanup & Refactoring

#### [MODIFY] [button.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/button.tsx)
Remove the 66-line commented-out code block at the top. Keep only the active implementation.

#### [MODIFY] [Card.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/Card.tsx)
Update import path from `../../lib/utils` to `../../lib/utils` (already correct), update colors to theme vars.

#### [MODIFY] [input.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/input.tsx)
Update import path from `../../lib/utils` to `../../lib/utils`, update border colors to theme vars.

#### [MODIFY] [textarea.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/textarea.tsx)
Same as input — update colors to use theme vars.

#### [DELETE] [Mainpage.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Mainpage.tsx)
Unused placeholder page. Not referenced in router or any other file.

#### [DELETE] [ProjectsAnimation.css](file:///d:/2025/DEV/Khamsy/src/pages/ProjectsAnimation.css)
Not imported by any file.

#### [DELETE] [Animations.tsx](file:///d:/2025/DEV/Khamsy/src/utils/Animations.tsx)
Duplicate of [lib/utils.ts](file:///d:/2025/DEV/Khamsy/src/lib/utils.ts). Not imported anywhere.

#### [MODIFY] [App.tsx](file:///d:/2025/DEV/Khamsy/src/App.tsx)
Remove `import './App.css'` (file is empty).

#### Rename `CanvasSparkles .tsx` to `CanvasSparkles.tsx` (remove space in filename)
Update import in [Home.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Home.tsx) accordingly.

#### [NEW] [ContactInfo.tsx](file:///d:/2025/DEV/Khamsy/src/components/ContactInfo.tsx)
Extract the duplicated [ContactInfo](file:///d:/2025/DEV/Khamsy/src/pages/Home.tsx#230-249) component from both [Home.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Home.tsx) and [Contact.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Contact.tsx) into a shared component.

---

### Phase 3: Migrate Colors to Theme Variables

Every file with hardcoded Tailwind color classes will be updated. Key mapping:

| Old Hardcoded | New Theme Variable |
|---|---|
| `bg-white dark:bg-[#09090b]` | `bg-background` |
| `text-gray-900 dark:text-white` | `text-foreground` |
| `text-gray-700 dark:text-gray-300` | `text-muted-foreground` |
| `text-gray-600 dark:text-gray-400` | `text-muted-foreground` |
| `bg-gray-800` (footer) | `bg-surface-dark` |
| `bg-white dark:bg-neutral-900` | `bg-card` |
| `border-gray-200 dark:border-gray-700` | `border-border` |
| `bg-blue-500` / `text-blue-500` | `text-primary` / `bg-primary` |
| `bg-purple-600` | `bg-accent` |
| `hover:bg-gray-200 dark:hover:bg-gray-800` | `hover:bg-muted` |
| `bg-white/80 dark:bg-gray-900/80` | `bg-surface/80` |

Files to update (~15 files):
- [MainLayout.tsx](file:///d:/2025/DEV/Khamsy/src/layouts/MainLayout.tsx), [Navbar.tsx](file:///d:/2025/DEV/Khamsy/src/components/Navbar.tsx), [Footer.tsx](file:///d:/2025/DEV/Khamsy/src/components/Footer.tsx)
- [Home.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Home.tsx), [About.tsx](file:///d:/2025/DEV/Khamsy/src/pages/About.tsx), [Skills.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Skills.tsx), [Projects.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Projects.tsx)
- [Education.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Education.tsx), [EducationCertifications.tsx](file:///d:/2025/DEV/Khamsy/src/pages/EducationCertifications.tsx), [QASection.tsx](file:///d:/2025/DEV/Khamsy/src/pages/QASection.tsx)
- [ToolsAndTechnologies.tsx](file:///d:/2025/DEV/Khamsy/src/pages/ToolsAndTechnologies.tsx), [Contact.tsx](file:///d:/2025/DEV/Khamsy/src/pages/Contact.tsx)
- UI components: [Card.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/Card.tsx), [input.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/input.tsx), [textarea.tsx](file:///d:/2025/DEV/Khamsy/src/components/ui/textarea.tsx)

---

### Phase 4: Modern UI Polish

#### [MODIFY] [Footer.tsx](file:///d:/2025/DEV/Khamsy/src/components/Footer.tsx)
Complete redesign from basic gray box to:
- Gradient background with glassmorphism
- Social links with hover animations
- Better spacing and typography
- Theme-aware colors

#### [MODIFY] [Navbar.tsx](file:///d:/2025/DEV/Khamsy/src/components/Navbar.tsx)
- Use accent color for active nav link instead of hardcoded `bg-blue-200`
- Improve glassmorphism backdrop
- Better dark mode contrast

---

## Verification Plan

### Automated Tests
1. **TypeScript Build Check**: `npm run build` — verifies no type errors, no broken imports from deleted/renamed files
2. **Lint Check**: `npm run lint` — verifies no ESLint errors

### Manual Verification
1. Run `npm run dev` and open in browser
2. Verify light mode renders correctly with the new purple accent theme
3. Toggle to dark mode and verify all sections adapt properly
4. Scroll through all sections (Hero, About, Tools, Skills, Projects, Education, Certifications, QA, Contact) to confirm no text is invisible or clashing
5. Verify the Navbar glassmorphism and active link highlighting
6. Verify the Footer design
