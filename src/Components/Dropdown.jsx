
export default function Dropdown({name}) {
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'it', name: 'Italian' },
        { code: 'zh', name: 'Chinese' },
        { code: 'hi', name: 'Hindi' }
    ];

    const login = [ "Login", "Sign Up"
    ]
    const logout = [ "Log Out", "Sign Out"
    ]

    // className="appearance-none bg-black text-white font-bold text-base rounded-md px-[1vw] py-[1vh] border border-white"
    if (name === "language") {
        return (
            <select className="appearance-none bg-black text-white font-bold text-base rounded-md px-[1vw] py-[1vh] border border-white">
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        );
    }
    if (name === "login") {
        return (
            <select className="appearance-none bg-black text-white font-bold text-base rounded-md px-[1vw] py-[1vh] border border-white">
                {login.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        );
    }
    if (name === "logout") {
        return (
            <select className="appearance-none bg-black text-white font-bold text-base rounded-md px-[1vw] py-[1vh] border border-white">
                {logout.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        );
    }
}