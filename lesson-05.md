# Lesson 5: The System Audit

The written audit of your running system. Every claim must be backed by
something you observed in the Network tab, the console, or the server's
terminal output.

## Single point of failure

I stopped the artists json-server and reloaded the page. The visitor saw "Failed to fetch" and the artist cards did not load.The artists server is a single point of failure because the page depends on it for the artist data.Redundancy here would mean having another server or data source available if the main artists server failed.

## Latency

With Network throttling enabled, the artists request took 2.07 s.
While the request was waiting, the page showed "Loading artists...".
This delay is latency: the time between sending the request and receiving the response.

## Caching

With the cache disabled, the artists request took 29 ms.
With the cache enabled, it also took 29 ms.
In this test I did not observe a measurable speed difference from caching.
Caching means reusing previously fetched resources instead of downloading them again when possible.

## The layers

Presentation layer: The HTML page, artist cards, loading message, buttons, and form that the visitor sees and uses.
Application layer: script.js handles the page logic, sends requests with fetch, submits new artists, waits for both servers with Promise.all.
Data layer: artists.json and label.json.

## One request's full journey

The page sends a GET request to http://localhost:3000/artists.
The json-server receives the request and reads the artist data. In the Network tab I observed a 200 OK response with application/json content.
The response is parsed as JSON in script.js. After the required requests have completed, the artist array is passed to renderCards(), which creates the cards shown on the page.

## STRETCH: what a real system would need that json-server skipped
