const collection = () => '/users';
const member = (userId) => `${collection}/${userId}`;

export default {
    collection,
    member,
}
