// Create web server and define routes
const app = express();
app.use(express.static('public'));
app.use(express.json());

// Get all todos
app.get('/api/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.json(todos);
    }).catch((err) => {
        res.status(500).send('Server error');
    });
});

// Create a todo
app.post('/api/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((todo) => {
        res.json(todo);
    }).catch((err) => {
        res.status(500).send('Server error');
    });
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id).then((todo) => {
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.json(todo);
    }).catch((err) => {
        res.status(500).send('Server error');
    });
});

// Update a todo
app.patch('/api/todos/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed
    }, {
        new: true
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.json(todo);
    }).catch((err) => {
        res.status(500).send('Server error');
    });
});

// Start the web server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});