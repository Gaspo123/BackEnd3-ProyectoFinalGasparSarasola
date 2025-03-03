const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const one = await Product.create(data);
    return res.status(201).json({ message: "Created!", response: one });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const readProducts = async (req, res) => {
  try {
    const all = await Product.find();
    return res.status(200).json({ message: "Read!", response: all });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export { createProduct, readProducts };
