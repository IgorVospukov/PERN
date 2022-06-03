class ApiError {
  constructor(status, massage){
    super();
    this.status = status;
    this.massage  = massage;

  }
  static badRequest(massage) {
    return new ApiError(404, message)
  };
  static internal(massage) {
    return new ApiError(500, message)
  };
  static forBidden(massage) {
    return new ApiError(403, message)
  };

};
module.exports = ApiError;