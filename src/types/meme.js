
// Meme data structure (converted from TypeScript interfaces to JSDoc comments)

/**
 * @typedef {Object} Meme
 * @property {string} id
 * @property {string} title
 * @property {string} image_url
 * @property {string[]} tags
 * @property {number} upvotes
 * @property {number} downvotes
 * @property {string} owner_id
 * @property {string} created_at
 * @property {string} [caption]
 * @property {string} [vibe]
 * @property {number} [current_bid]
 * @property {string} [highest_bidder]
 */

/**
 * @typedef {Object} Bid
 * @property {string} id
 * @property {string} meme_id
 * @property {string} user_id
 * @property {number} credits
 * @property {string} created_at
 */

/**
 * @typedef {Object} Vote
 * @property {string} id
 * @property {string} meme_id
 * @property {string} user_id
 * @property {'up' | 'down'} type
 * @property {string} created_at
 */
