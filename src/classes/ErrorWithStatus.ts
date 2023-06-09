class ErrorWithStatus extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export class AccountNotFoundError extends ErrorWithStatus {
  constructor() {
    super(404, "Account not found");
  }
}

export class PasswordIncorrectError extends ErrorWithStatus {
  constructor() {
    super(404, "Password incorrect");
  }
}

export class AccountAlreadyConfirmedError extends ErrorWithStatus {
  constructor() {
    super(409, "Account already confirmed");
  }
}

export class AccountNotConfirmedError extends ErrorWithStatus {
  constructor() {
    super(409, "Account not confirmed");
  }
}

export class AccountAlreadyExistsError extends ErrorWithStatus {
  constructor() {
    super(409, "Account already exists");
  }
}

export class TokenInvalidError extends ErrorWithStatus {
  constructor() {
    super(403, "Token invalid");
  }
}

export class TokenMissingError extends ErrorWithStatus {
  constructor() {
    super(403, "Token is missing");
  }
}

export class HashingPasswordError extends ErrorWithStatus {
  constructor() {
    super(500, "Error hashing password");
  }
}

export class SendingMailError extends ErrorWithStatus {
  constructor() {
    super(500, "Error sending mail");
  }
}