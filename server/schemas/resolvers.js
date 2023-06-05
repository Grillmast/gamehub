const { User, Game, GameDetails, Genre, Platform, Screenshot, Tag, Trailer } = require('../models');

const resolvers = {
  Query: {
    games: async (_, { genre, platform, tag, sortBy }) => {
      let filters = {};
      
      if (genre) {
        filters.genres = genre;
      }
      
      if (platform) {
        filters.platforms = platform;
      }

      if (platform) {
        filters.tags = tag;
      }

      const games = await Game.find(filters).sort(sortBy);
      return games;
    },
    gameDetails: async (_, { gameId }) => {
      const gameDetails = await GameDetails.findById(game_pk);
      return gameDetails;
    },
  },
  Mutation: {
    rateGame: async (_, { gameId, rating }, context) => {
      const userId = context.userId;

      // Find the user and game
      const user = await User.findById(userId);
      const game = await Game.findById(gameId);

      // Update the user's ratedGames with the new rating
      user.ratedGames.push({ game: gameId, rating });
      await user.save();

      // Update the game's rating and save it
      game.rating = calculateAverageRating(game);
      await game.save();

      // Return the updated game
      return game;
    },
    // Implement other mutation resolvers based on your requirements
  },
  User: {
    savedGames: async (user) => {
      const savedGames = await Game.find({ _id: { $in: user.savedGames } });
      return savedGames;
    },
    // Implement other resolver functions for the fields of the User type
  },
  Game: {
    screenshots: async (game) => {
      const screenshots = await Screenshot.find({ game: game._id });
      return screenshots;
    },
    trailers: async (game) => {
      const trailers = await Trailer.find({ game: game._id });
      return trailers;
    },
    genres: async (game) => {
        const genres = await Genre.find({ _id: { $in: game.genres } });
        return genres;
    },
    platforms: async (game) => {
        const platforms = await Platform.find({ _id: { $in: game.platforms } });
        return platforms;
    },
    tags: async (game) => {
        const tags = await Tag.find({ _id: { $in: game.tags } });
        return tags;
    },
    // Implement other resolver functions for the fields of the Game type
  },
  // Implement resolver functions for other types and their fields
};

module.exports = resolvers;
