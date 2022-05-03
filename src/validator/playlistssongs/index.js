const InvariantError = require('../../exceptions/InvariantError');
const { PlaylistsSongsPayloadSchema } = require('./schema');

const PlaylistsSongsValidator = {
  validatePlaylistsSongsPayload: (payload) => {
    const validationResult = PlaylistsSongsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistsSongsValidator;
