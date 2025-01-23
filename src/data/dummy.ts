// this is dummay response i wrote related to the dashbaord screens you shared
export const DUMMY_DATABASE = [
  {
    userId: 'johnr',
    profile: {
      name: 'John R',
      designation: 'Free Lancer',
      imageUrl: 'https://someurl.jpg',
    },
    summary: {
      income: {
        amount: 1280,
        currency: 'USD',
        symbol: '$',
        trend: {
          value: '15%',
          type: 'up',
        },
        period: {
          text: 'Last Qtr',
          value: '2020 -4Q',
        },
      },
      expenses: {
        amount: 147.56,
        currency: 'USD',
        symbol: '$',
        trend: {
          value: '10%',
          type: 'down',
        },
        period: {
          text: 'Last Qtr',
          value: '2020 -4Q',
        },
      },
      taxes: {
        amount: 91.42,
        currency: 'USD',
        symbol: '$',
        trend: {
          value: '20%',
          type: 'up',
        },
        period: {
          text: 'Last Qtr',
          value: '2020 -4Q',
        },
      },
      invoices: {
        amount: 30,
        trend: {
          value: '20%',
          type: 'up',
        },
        period: {
          text: 'Last Qtr',
          value: '2020 -4Q',
        },
      },
    },
    graph: {
      income: {
        quaterly: {
          '1st Quarter': [
            { month: 'Jan', value: 430 },
            { month: 'Jan', value: 500 },
            { month: 'Jan', value: 600 },
            { month: 'Jan', value: 700 },
            { month: 'Jan', value: 650 },
            { month: 'Feb', value: 750 },
            { month: 'Feb', value: 750 },
            { month: 'Feb', value: 960 },
          ],
        },
      },
    },
  },
];
