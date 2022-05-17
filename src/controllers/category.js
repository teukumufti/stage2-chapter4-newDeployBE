const { category } = require("../../models");

// ============== GET CATAGORY ===============
exports.getCategory = async (req, res) => {
    try {
        const categories = await category.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });

        res.status(200).send({
            status: "Success",
            message: "Get all category success",
            categories,
        });
    } catch (error) {
        console.log(error);
        res.status(404).send({
            status: "Get data Failed",
            message: "Server Error",
        });
    }
};

// ============== ADD CATEGORIES ===============
exports.addCategory = async (req, res) => {
    try {
        let newCategory = await category.create(req.body);

        res.status(200).send({
            status: "Success",
            message: "Add Category Success",
            data: {
                category: {
                    id: newCategory.id,
                    name: newCategory.name
                }
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "Add Category Failed",
            message: "Server Error",
        });
    }
};

// ============ GET DETAIL CATEGORY ========
exports.getDetailCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const categories = await category.findOne({
            where: { id },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });

        res.status(200).send({
            status: "Success",
            message: `Get detail category id: ${id} success`,
            data: {
                category: categories,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(404).send({
            status: "Get detail data failed",
            message: "Server Error",
        });
    }
};

// ============ UPDATED CATEGORY ==============
exports.updateCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const data = req.body
        console.log(data)
        let updateCategory = await category.update({
            ...data
        },
            { where: { id } }
        );

        console.log(updateCategory)

        res.status(200).send({
            status: "Success",
            message: `Update category at id: ${id} success`,
            data: {
                category: {
                    id: id,
                    name: data.name
                }
            },
        });
    } catch (error) {
        console.log(error);
        res.status(404).send({
            status: "Updated product failed",
            message: "Server Error",
        });
    }
};

// ============ DELETE CATEGORIES ===========
exports.deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await category.destroy({
            where: { id },
        });

        console.log(data)

        res.status(200).send({
            status: "Success",
            message: `Delete category: ${id} success`,
            data: {
                id: { id }
            },
        });
    } catch (error) {
        console.log(error);
        res.status(401).send({
            status: "Delete category failed",
            message: "Server Error",
        });
    }
};

