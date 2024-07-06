

// const stack = [1, 2, 3];
// const position = 1
// const expected = 2;
// console.log(getItem(stack,position));

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
function getItem(cards, position) {
    return cards[position];
  }
  
// const cards = [1, 2, 3];
// const position = 1
// const replacementCard = 5;
// const expected = [1, 5, 3];
// console.log(setItem(cards,position,replacementCard));

  /**
   * Exchange card with replacementCard at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   * @param {number} replacementCard
   *
   * @returns {number[]} the cards with the change applied
   */
  function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
  }
  
// const cards = [1, 2, 3];
// const newCard = 7
// const expected = [1, 2, 3, 7];
// console.log(insertItemAtTop(cards,newCard));

  /**
   * Insert newCard at the end of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards with the newCard applied
   */
  function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
  }

// const cards = [1, 2, 3];
// const position = 1
// const expected = [1, 3];
// console.log(removeItem(cards, position));
  
  /**
   * Remove the card at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   *
   * @returns {number[]} the cards without the removed card
   */
  function removeItem(cards, position) {
    cards.splice(position,1);
    return cards;
  }

const cards = [1, 2, 3];
const expected = [1, 2];
console.log(removeItemFromTop(cards));
  
  /**
   * Remove card from the end of the cards array
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  function removeItemFromTop(cards) {
    cards.pop();
    return cards;
  }
  
  /**
   * Insert newCard at beginning of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards including the new card
   */
  function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
  }
  
  /**
   * Remove card from the beginning of the cards
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
  }
  
  /**
   * Compare the number of cards with the given stackSize
   *
   * @param {number[]} cards
   * @param {number} stackSize
   *
   * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
   */
  function checkSizeOfStack(cards, stackSize) {
    return cards.length == stackSize;
  }
  