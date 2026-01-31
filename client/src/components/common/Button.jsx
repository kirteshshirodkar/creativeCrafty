export default function Button({ children, variant = "primary" }) {
const base = "w-full py-3 rounded-xl transition font-medium tracking-wide";


const styles = {
primary:
"bg-[#2b2b2b] text-[#faf9f7] hover:opacity-90",
secondary:
"border border-[#2b2b2b] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-[#faf9f7]",
link: "text-sm text-[#2b2b2b] underline hover:opacity-70",
};


return <button className={`${base} ${styles[variant]}`}>{children}</button>;

}