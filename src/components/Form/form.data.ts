export const fields = [
    {
        value: "",
        label: "Full Name",
        id: "name",
        validation: {
            html: [
                {
                    attribute: "required",
                },
                {
                    attribute: "minlength",
                    value: "3",
                },
                {
                    attribute: "maxlength",
                    value: "100",
                },
            ],
        },
    },
    {
        value: "",
        label: "Phone",
        id: "phone",
        type: "tel",
        placeholder: "777-777-777",
        validation: {
            html: [
                {
                    attribute: "required",
                },
                {
                    attribute: "pattern",
                    value: "[0-9]{3}-[0-9]{3}-[0-9]{3}",
                },
            ],
        },
    },
    {
        value: "",
        label: "Email",
        id: "email",
        type: "email",
        placeholder: "email@address.com",
        validation: {
            html: [
                {
                    attribute: "required",
                },
            ],
        },
    },
    {
        value: "",
        label: "Website URL",
        id: "website",
        type: "url",
        placeholder: "https://www.website.com",
        validation: {
            html: [
                {
                    attribute: "required",
                },
            ],
        },
    },
    {
        value: "",
        label: "Password",
        id: "password1",
        type: "password",
        title: "Please include at least 1 uppercase character, 1 lowercase character & 1 number",
        placeholder: "Create Password (Min. 8 Chars)",
        validation: {
            html: [
                {
                    attribute: "required",
                },
                {
                    attribute: "pattern",
                    value: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
                },
            ],
        },
    },
    {
        value: "",
        label: "Password",
        id: "password2",
        type: "password",
        placeholder: "Confirm Password",
        validation: {
            html: [
                {
                    attribute: "required",
                },
                {
                    attribute: "pattern",
                    value: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
                },
            ],
            validate: function (): boolean {
                const pwd1 = fields.find(f => f.id === 'password1')?.value;
                const pwd2 = fields.find(f => f.id === 'password2')?.value;

                return pwd1 === pwd2;
            }
        },
    },
];