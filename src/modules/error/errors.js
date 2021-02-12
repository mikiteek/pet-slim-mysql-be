const UserAlreadyExistError = {
  message: "Such email already exist",
}

const BadRequestError = {
  message: "Bad request",
}

const NotFoundError = {
  message: "Not found",
}

const UnauthorizedError = {
  message: "Unauthorized",
}

const FailedToPost = {
  message: "Failed to create entity, try later",
}

module.exports = {
  UserAlreadyExistError,
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  FailedToPost,
};