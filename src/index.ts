import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething = new SaySomething("Hello TypeScirpt")
saySomething.sayText(root)
