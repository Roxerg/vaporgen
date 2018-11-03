import tweepy
import os



class uploader:

    def __init__(self):
        
        consumer_key = ""
        consumer_secret = ""
        access_token = ""
        access_token_secret = ""
        strs = []

        with open("keys.txt") as file:
            consumer_key = file.readline()
            consumer_secret = file.readline()
            access_token = file.readline()
            access_token_secret = file.readline()

        auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        auth.set_access_token(access_token, access_token_secret)
        self.api = tweepy.API(auth)


    def upload():


