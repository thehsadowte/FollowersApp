export function updateData(array) {
  return array.map(user => {
    return {
      ...user,
      isFollowing: false,
    };
  });
}
