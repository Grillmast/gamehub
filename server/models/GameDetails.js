const { Schema, model } = require('mongoose');

const gameDetailsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  name_original: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  metacritic: {
    type: Number,
    default: null,
  },
  metacritic_platforms: [
    {
      // Define the schema for GamePlatformMetacritic if it has specific fields
      // Example: type: Schema.Types.ObjectId, ref: 'GamePlatformMetacritic'
    }
  ],
  released: {
    type: String,
    default: null,
  },
  tba: {
    type: Boolean,
    default: false,
  },
  updated: {
    type: String,
    default: null,
  },
  background_image: {
    type: String,
    default: null,
  },
  background_image_additional: {
    type: String,
    default: null,
  },
  website: {
    type: String,
    default: null,
  },
  rating: {
    type: Number,
    required: true,
  },
  rating_top: {
    type: Number,
    default: null,
  },
  ratings: {
    // Define the schema for Ratings if it has specific fields
    // Example: type: Schema.Types.ObjectId, ref: 'Ratings'
  },
  reactions: {
    // Define the schema for Reactions if it has specific fields
    // Example: type: Schema.Types.ObjectId, ref: 'Reactions'
  },
  added: {
    type: Number,
    default: null,
  },
  added_by_status: {
    // Define the schema for AddedByStatus if it has specific fields
    // Example: type: Schema.Types.ObjectId, ref: 'AddedByStatus'
  },
  playtime: {
    type: Number,
    default: null,
  },
  screenshots_count: {
    type: Number,
    default: null,
  },
  movies_count: {
    type: Number,
    default: null,
  },
  creators_count: {
    type: Number,
    default: null,
  },
  achievements_count: {
    type: Number,
    default: null,
  },
  parent_achievements_count: {
    type: String,
    default: null,
  },
  reddit_url: {
    type: String,
    default: null,
  },
  reddit_name: {
    type: String,
    default: null,
  },
  reddit_description: {
    type: String,
    default: null,
  },
  reddit_logo: {
    type: String,
    default: null,
  },
  reddit_count: {
    type: Number,
    default: null,
  },
  twitch_count: {
    type: String,
    default: null,
  },
  youtube_count: {
    type: String,
    default: null,
  },
  reviews_text_count: {
    type: String,
    default: null,
  },
  ratings_count: {
    type: Number,
    default: null,
  },
  suggestions_count: {
    type: Number,
    default: null,
  },
  alternative_names: [
    {
      type: String,
      default: null,
    }
  ],
  metacritic_url: {
    type: String,
    default: null,
  },
  parents_count: {
    type: Number,
    default: null,
  },
  additions_count: {
    type: Number,
    default: null,
  },
  game_series_count: {
    type: Number,
    default: null,
  },
  esrb_rating: {
    // Define the schema for EsrbRating if it has specific fields
    // Example: type: Schema.Types.ObjectId, ref: 'EsrbRating'
  },
  platforms: [
    {
      // Define the schema for Platform if it has specific fields
      // Example: type: Schema.Types.ObjectId, ref: 'Platform'
    }
  ],
});

const GameDetails = model('GameDetails', gameDetailsSchema);

module.exports = GameDetails;



