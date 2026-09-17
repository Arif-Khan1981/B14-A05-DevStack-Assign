1.  Name of Project: 
    DevStack

2. Description:
    DevStack is an interactive tool for exploring modern web technologies and assembling your own personalized development stack. Browse frontend frameworks, databases, and tools as clean, ratable cards — add the ones you like, watch your picks collect live in a sticky sidebar, and remove them just as easily. It's a lightweight, hands-on way to plan out a project's tech stack before you start building.

3. Technologies used:
    a. React
    b. TypeScript
    c. Tailwind CSS

4.  Features:
    a. Browse & Compare Technologies: Explore a responsive grid of technology cards — each showing category, skill level, rating, and a short description — so you can quickly scan and compare options across your stack.

    b. Add to Stack, Instantly: Click "Add to Stack" on any card to select it, with the button and card border updating immediately to reflect your pick. Click again to remove it — no page reloads, no friction.

    c. Live, Sticky "Your Stack" Sidebar: A sticky sidebar tracks everything you've selected in real time, complete with per-item removal, a "Remove All" reset, and toast notifications confirming every add or remove.



Q/A:

(i) JSX:  JSX means JavaScript XML. It is a React syntax that lets us write HTML-like code inside JavaScript/TypeScript.

(ii) Difference between props and state:  Props passes data from parent to child. It is usualy read-only. On the otherhand State managed Data inside a component, can update data dynamically.

(iii) useState() is a React Hook used to create and manage changing data (state) inside a function component.

In my project, I used it in Navbar.tsx for the mobile menu.

(iv) useEffect() is a React Hook used to perform side effects, such as fetching data from an API/JSON file, after a component renders.

(v) React uses key to match list items to their DOM/state across re-renders, so it can update, add, or remove the right elements instead of guessing by position.

(vi)  Conditional rendering: It is basically using JS logic inside component to decide what gets rendered.

I used it in several components (StackCard.tsx, TechCard.tsx, Toast.tsx) several times.

(vii) Parent → Child: Props

The parent passes data down by writing it as JSX attributes; the child receives it as a function parameter (destructured from the props object).

Child → Parent: Callback functions. The child calls that function (usually with some data as an argument) when something happens — and the function runs in the parent's scope, where it can update the parent's state.