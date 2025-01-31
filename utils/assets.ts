


type nav = {
    name:string;
    route:string;
    icon:string;
}
const nav : nav[]= [
    {
        name:"Home",
        route:"/",
        icon:"Home",
    },
    {
        name:"About",
        route:"/about",
        icon:"CircleHelp"
    },
    {
        name:"Projects",
        route:"/projects",
        icon:"FolderGit2"
    },
    {
        name:"Contact",
        route:"/contact",
        icon:"Mails"
    }
]

export {nav}