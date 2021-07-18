const Helpers = {
  /**
   * This functin takes a number and returns one of the 4 colors
   * @param {*} number
   * @returns color code for border
   */
  decideBorderColor: (number) => {
    switch (number % 4) {
      case 0:
        return "#E57373";
      case 1:
        return "#65B6F7";
      case 2:
        return "#82C786";
      case 3:
        return "#FFB74D";
      default:
        return "black";
    }
  },
};

export default Helpers;
