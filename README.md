Demo here:

https://simple-table-omega.vercel.app/

Example:

```js
import logo from './logo.svg';
import './App.scss';
import { data } from './data';
import { data2 } from './data2';
import Table from './Table';

const fakeData = Array(55).fill('').map((e, i) => ({
  _id: i + 1,
  email: "minagerges123@gmail.com",
  name: "mina",
  price: Math.floor(Math.random() * (55 - 1 + 1) + 1),
  phone: "+96170345114",
  subject: "test",
  message: "ahlannn",
  date: "2021-09-17 19:10:50",
}));


function App() {

  const config = {
    fields: [
      {
        title: 'ID',
        key: '_id',
        sortable: true
      },
      {
        title: 'Full Name',
        key: 'name',
        isTitle: true,
        sortable: true
      },
      {
        title: 'Price',
        key: 'price',
        isTitle: true,
        sortable: true
      },
      {
        title: 'Full Name with ID',
        key: 'fullNameWithID',
        isTitle: true,
        queryBy: row => `${row.name} id is: ${row.price}`,
        sortable: {
          // sortQuery: row => `${row.name} id is: ${row.price}`,
        },
        formatter: row => <div>full name: {row?.name} {row?.price}</div>,
      },
      {
        title: 'Email Address',
        key: 'email',
        sortable: true,
        isTagline: true,
      },
      {
        title: 'Date created',
        key: 'date',
        formatter: value => (new Date(Number('2021-09-16 22:18:31'))).toDateString(),
        isInvisible: true
      }
    ],
    // defaultSort: {
    //   field: 'price',
    //   isAsc: true,
    // },
    items: data2,
    primaryKey: '_id',
    style: {},
  };

  return (
    <div className="App">
      <Table data={data2} config={config} />
    </div>
  );
}

export default App;
```
