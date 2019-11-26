function generate() {
  let output = document.getElementById('output');

  let imageUrl = document.getElementById("image-url").value;
  let name = document.getElementById("name").value;
  let twitterId = document.getElementById("twitter-id").value;
  let githubId = document.getElementById("github-id").value;
  let description = document.getElementById("description").value;
  let result =
            '&lt;section itemprop="author" itemscope itemtype="http://schema.org/Person"&gt;&lt;div class="thumb"&gt;&lt;img src="' + imageUrl + '" alt="' + name + '" class="img" itemprop="image"&gt;&lt;/div&gt;&lt;div class="prof-txt"&gt;&lt;p class="name" itemprop="name"&gt;' + name + '&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;a href="https://twitter.com/' + twitterId + '" itemprop="url"&gt;&lt;img src="https://cdn-ak.f.st-hatena.com/images/fotolife/f/findy-lab/20191118/20191118105020.png" alt="Twitter ' + twitterId + '"&gt;&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href="https://github.com/' + githubId + '" itemprop="url"&gt;&lt;img src="https://cdn-ak.f.st-hatena.com/images/fotolife/f/findy-lab/20191118/20191118105017.png" alt="GitHub ' + githubId + '"&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p itemprop="' + description + '"&gt;';
  output.innerHTML = result;
  console.log(result);

   output.focus();
   output.select();
   document.execCommand("Copy");
   alert("コピーしました : " + output.value);
}
