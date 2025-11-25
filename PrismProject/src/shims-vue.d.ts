// The internet says that this will allow TypeScript files 
// to detect Vue files as components.
declare module '*.vue' {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{},{},any>
    export default component
}
