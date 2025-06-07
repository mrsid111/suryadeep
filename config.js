
window.CMS_MANUAL_INIT = true;
window.addEventListener("DOMContentLoaded", function() {
    CMS.init({
        config: {
            backend: {
                name: "git-gateway",
                branch: "main"
            },
            media_folder: "images/products",
            public_folder: "/images/products",
            collections: [
                {
                    name: "blog",
                    label: "Blog",
                    folder: "blog",
                    create: true,
                    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
                    fields: [
                        { label: "Title", name: "title", widget: "string" },
                        { label: "Publish Date", name: "date", widget: "datetime" },
                        { label: "Body", name: "body", widget: "markdown" }
                    ]
                },
                {
                    name: "pages",
                    label: "Pages",
                    files: [
                        {
                            label: "About",
                            name: "about",
                            file: "index.html",
                            fields: [
                                { label: "About Content", name: "body", widget: "markdown" }
                            ]
                        }
                    ]
                }
            ]
        }
    });
});
