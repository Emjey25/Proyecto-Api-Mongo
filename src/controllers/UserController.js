import UserModel from "../models/UserModel.js";

export const CreateUser = async (req, res) => {
	try {
		const user = await UserModel.create(req.body);
		console.log(user);
		res.status(201).send(user);
	} catch (error) {
		res
			.status(500)
			.send({ error: "Failed to create user", details: error.message });
	}
};

export const GetAllUsers = async (req, res) => {
	try {
		const users = await UserModel.find();
		res.status(200).send(users);
	} catch (error) {
		res
			.status(500)
			.send({ error: "Failed to fetch users", details: error.message });
	}
};

export const GetUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const userById = await UserModel.findById(id);
		console.log(userById);
		res.status(200).send(userById);
	} catch (error) {
		res
			.status(500)
			.send({ error: "Id User not valid", details: error.message });
	}
};

export const UpdateUser = async (req, res) => {
	const { id } = req.params;
	const userUpdate = await UserModel.findById(id);
	if (!userUpdate) {
		res.status(404).send({ error: "User not found" });
	}

	try {
		const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).send(updatedUser);
	} catch (error) {
		res
			.status(500)
			.send({ error: "Failed to update user", details: error.message });
	}
};

export const DeleteUser = (req, res) => {
	const { id } = req.params;
	res.send(`User with ID: ${id} deleted`);
};
