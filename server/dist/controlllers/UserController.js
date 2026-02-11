import Thumbnail from "../models/Thumbnail.js";
// controller to get all user thumbnails
export const getUsersThumbnails = async (req, res) => {
    try {
        const { userId } = req.session;
        const thumbnails = await Thumbnail.find({ userId }).sort({ createdAt: -1 });
        res.json({ thumbnails });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
//controller to get single thumbnail of a user
export const getThumbnailbyId = async (req, res) => {
    try {
        const { userId } = req.session;
        const { id } = req.params;
        const thumbnail = await Thumbnail.findOne({ userId, _id: id });
        res.json({ thumbnail });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
