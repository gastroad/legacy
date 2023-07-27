/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((q, w) => q ^ w, 0);
};

var DevTemSeeMoreButton = document.querySelector(
  "#contents > div.xans-element-.xans-product.xans-product-listmore-2.xans-product-listmore.xans-product-2.ec-base-paginate.typeMoreview > a"
);
DevTemSeeMoreButton.addEventListener("click", function() {
  console.log("test");
});
