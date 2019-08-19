# How to install package

1. Make sure you are CD'd into the same level of your application's package.json file.

2. In the CLI run `npm i format-errors-pg`

---

## How to use this package

1. Require the function from its file in node modules.

`const formatErrorPG = require("format-errors-pg");`

2. Use the function in proper location
```
router.post("/register", async (req, res) => {

  const { name, password } = req.body;

  const newUser = {
    name,
    password
  }

  try {
    await database.query("INSERT into USERS ( name, password ) VALUES ( $1, $2 )", [
      name,
      password
    ]);
    return res.status(200).json({newUser})
  } catch (error) {
    res.status(500).json({ error: formatPGErrors(error) });
  }
});
```

---

#### Notice this part in the **.catch** block:

`res.status(500).json({ error: formatPGErrors(error) });`

*Note* that the `.stack` property is somewhat ***hidden*** on the error object that is sent back from PG. However, it IS there.

That is where the function should be used, **with 500 errors** inside of *catch* blocks.

It works with **promises** as well if you do not want/can-not use async and await for some reason :).

---

### Example output ( in postman )

Inside of the Postman application I made a *HTTP POST* request to my application's end-point, and it returned the following output:

```

{
    "error": "duplicate key value violates unique constraint
    \"users_name_key\"",
}

```

As you can see the error message is pretty clear. We are dealing with a user's name duplication error.

 - A more experienced BE dev will say we have an error on the table `users` at the column entitled `name`, and then fill in the rest of it by the other parts of the message.


<span style="text-decoration: underline; font-weight: bold; font-size: 16px">More practice!!</span>

```

{
    "error": "duplicate key value violates unique constraint 
    \"users_email_key\""
}

```

- FED sees this and will probably think hmm, we probably have a duplicate email address in use.

- BED/full-stack/genius-wizard might think error at table `users` at column `email`, and then fill in the rest of it by the other parts of the message.
---

### <span style="text-decoration: underline">**Note**</span>
If you are more experienced with Node + PG and the BE in general then you might be thinking "this is already in the error message". I say yes, it *IS* in the error message. ***However***, this is a message that a front-end developer can easily understand without be scared off by a giant wall of error text. It **removes** the rest of the message which contains all the *file paths* that are stored in the error stack.

---
