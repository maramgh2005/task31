const nav = [
    {
        label: "Home",
        link: "#home"

    }
    ,
    {
        label: "About",
        link: "#about"

    }, {
        label: "services",
        link: "#services",
        children: [
            {
                label: "web services",
                link: "#services"
            }, {
                label: "Design",
                link: "#services"
            }
        ]

    }, {
        label: "Team",
        link: "#team"

    }, {
        label: "Blog",
        link: "#blog"

    }]


export default nav;