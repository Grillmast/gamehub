const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    gameCount: Int
    savedGames: [Game]!
    ratedGames: [Game]
  }

  type Game {
    _id: ID!
    name: String!
    released: String
    added: String
    created: String
    updated: String
    rating: Float
    metacritic: Int
    screenshots: [Screenshot]
    trailers: [Trailer]
    genres: [Genre]
    platforms: [Platform]
    tags: [Tag]
  }

  type GameDetails {
    id: ID!
    slug: String!
    name: String!
    name_original: String!
    description: String!
    metacritic: Int
    metacritic_platforms: [GamePlatformMetacritic]
    released: String
    tba: Boolean
    updated: String
    background_image: String
    background_image_additional: String
    website: String
    rating: Float!
    rating_top: Int
    ratings: Ratings
    reactions: Reactions
    added: Int
    added_by_status: AddedByStatus
    playtime: Int
    screenshots_count: Int
    movies_count: Int
    creators_count: Int
    achievements_count: Int
    parent_achievements_count: String
    reddit_url: String
    reddit_name: String
    reddit_description: String
    reddit_logo: String
    reddit_count: Int
    twitch_count: String
    youtube_count: String
    reviews_text_count: String
    ratings_count: Int
    suggestions_count: Int
    alternative_names: [String]
    metacritic_url: String
    parents_count: Int
    additions_count: Int
    game_series_count: Int
    esrb_rating: EsrbRating
    platforms: [Platform]
  }

  type Screenshot {
    _id: ID!
    image: String
  }

  type Trailer {
    _id: ID!
    name: String
    preview: String
  }

  type GameList {
    count: Int!
    next: String
    previous: String
    results: [Game]
  }

  type Platform {
    id: ID!
    name: String!
    slug: String!
    games_count: Int
    image_background: String
    description: String
    image: String
    year_start: Int
    year_end: Int
  }

  type PlatformParent {
    id: ID!
    name: String!
    slug: String!
    platforms: [Platform]
  }

  type Genre {
    id: ID!
    name: String!
    slug: String!
    games_count: Int
    image_background: String!
    description: String
  }

  type Tag {
    id: ID!
    name: String!
    slug: String!
    games_count: Int
    image_background: String!
    description: String
  }

  type GamePlatformMetacritic {
    score: Int
  }
  
  type Ratings {
    id: Int
    title: String
    count: Int
    percent: Float
  }
  
  type Reactions {
    id: Int
    title: String
    count: Int
  }
  
  type AddedByStatus {
    yet: Int
    owned: Int
    beaten: Int
    toplay: Int
    dropped: Int
    playing: Int
  }
  
  type EsrbRating {
    id: Int
    name: String
    slug: String
  }

  type Query {
    games(
      page: Int
      pageSize: Int
      search: String
      searchPrecise: Boolean
      searchExact: Boolean
      parentPlatforms: String
      platforms: String
      stores: String
      developers: String
      publishers: String
      genres: String
      tags: String
      creators: String
      dates: String
      updated: String
      platformsCount: Int
      metacritic: String
      excludeCollection: Int
      excludeAdditions: Boolean
      excludeParents: Boolean
      excludeGameSeries: Boolean
      excludeStores: String
      ordering: String
    ): [Game]

    gameScreenshots(gameId: ID!): [Screenshot]
    gameTrailers(gameId: ID!): [Trailer]
    gameDetails(gameId: ID!): GameDetails
    gamesByParams(ordering: String, page: Int, pageSize: Int): GameList

    platforms(ordering: String, page: Int, page_size: Int): [Platform]

    platform(id: ID!): Platform

    parentPlatforms(
      ordering: String
      page: Int
      page_size: Int
    ): [PlatformParent]

    genres(ordering: String, page: Int, page_size: Int): [Genre]

    genre(id: ID!): Genre

    tags(page: Int, page_size: Int): [Tag]

    tag(id: ID!): Tag
  }

  type Mutation {
    saveGame(gameId: ID!): User
    removeGame(gameId: ID!): User
    rateGame(gameId: ID!, rating: Float!): Game
  }
`;

module.exports = typeDefs;
