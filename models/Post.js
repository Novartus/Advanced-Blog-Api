const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [6, "Title must be at least 6 characters long"],
      required: [true, "Title is Required"],
    },

    body: {
      type: String,
      minlength: [6, "Body must be at 6 characters long"],
      required: [true, "Body Text is Required"],
    },

    banner_image: {
      type: String,
      default: "default.jpg",
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
    // id: false,
    timestamps: true,
  }
);

// Cascade delete comments when a post is deleted
PostSchema.pre("remove", async function (next) {
  console.log(`Comment being removed from post ${this._id}`);
  await this.model("Comment").deleteMany({ post: this._id });
  next();
});

// Reverse populate with virtuals
PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
  justOne: false,
});

module.exports = mongoose.model("Post", PostSchema);
