import requests

URL = "https://jsonplaceholder.typicode.com/posts"


def get_all_posts():
    response = requests.get(url=URL, verify=False)
    response.raise_for_status()

    return response.json()


def test_all_posts_are_valid():
    all_posts = get_all_posts()

    for post in all_posts:
        assert post['title'], f"missing 'title' for post: {post}"
        assert post['body'], f"missing 'body' for post: {post}"
        assert isinstance(post['userId'], int), \
            f"Unexpected type for userID in post: {post}. Expected: int, Actual: {type(post['userId'])}"
