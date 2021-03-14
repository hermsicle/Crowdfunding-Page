export const menuData = [
    {
        id:0,
        header: 'Pledge with no reward',
        subheader: '',
        content: `
            Choose to support us without a reward 
            if you simply believe in our project.
            As a backer, you will be signed up to recieve
            product updates as well. 
        `,
        stock: '',
        left: '',
        active: false,
        disabled: false
    },
    {
        id:1,
        header: 'Bamboo Stand',
        subheader: 'Pledge $25 or more',
        content: `
            You get an ergonomic stand made of natural bamboo.
            You've helped us launch our promotional campaign, 
            and you'll be added to a special Backer member list.
        `,
        // stock: '101',
        button: 'Select Reward',
        left: 'left',
        minimumPledgeAmount: 25,
        active: false,
        disabled: false
    },
    {
        id:2,
        header: 'Black Edition Stand',
        subheader: 'Pledge $75 or more',
        content: `
        You get a Black Special Edition computer stand and a personal
        thank you. You'll be added to our Backer member list.
        Shipping is included.
        `,
        // stock: '64',
        button: 'Select Reward',
        left: 'left',
        minimumPledgeAmount: 75,
        active: false,
        disabled: false
    },
    {
        id:3,
        header: 'Mahogany Special Edition',
        subheader: 'Pledge $200 or more',
        content: `
            You get two Special Edition Mahagony stands, a Backer 
            T-Shirt, and a personal thank you. You'll be added to our
            Backer member list. Shipping is included.
        `,
        stock: '0',
        button: 'Out of Stock',
        left: 'left',
        minimumPledgeAmount: '',
        active: false,
        disabled: true
    }
]