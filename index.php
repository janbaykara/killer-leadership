<?php require("config.php");

$app = new App();
$app->HTMLINJECT = "ng-app='app'";
// $app->BODYINJECT;
// $app->PAGETITLE;

$app->document_head(); ?>

<div id="background"></div>

<main id="wrapper" ng-controller="mainController">
	<!-- <audio id="valkyrie" src="http://upload.wikimedia.org/wikipedia/commons/2/29/Richard_Wagner_-_Ride_of_the_Valkyries.ogg" autoplay></audio> -->

	<img src="<?=$app->IMGURL?>/greatestgeneration.png" />
	<header class="row" id="document-head">
		<h1 class="column small-12" id="title" fit-text>
			<?=$app->PROJECTNAME?>
		</h1>
		<div class="column small-12" id="summary">
			If the
			{{data.rulers.length}} most deadly rulers
			in history
			were still at large today,
			in the past <span id="time-elapsed">{{timeElapsed}}</span> secs
			they would have disposed of a collective <span id="kills-combined">{{combinedKillCount.toFixed(0)}}</span> victims.
		</div>
	</header>

	<section id="rulers">
		<ol class="row">
			<li class="ruler column small-12 row" ng-repeat="ruler in data.rulers">
				<div class="ruler-info small-12 medium-6 column">
					<h3>{{ruler.name}}</h3>
					<div class="ruler-details">{{ruler.country}}, {{ruler.from}}-{{ruler.to}}</div>
					<div class="ruler-stats">{{ruler.kills}} deaths caused in {{ruler.tenure.toFixed(1)}} years means {{ruler.kps.toFixed(4)}} kills per second. At that rate, {{ruler.name}} would have killed {{ruler.killCount.toFixed(2)}} men, women and children since you loaded this page...</div>
				</div>
				<div class="ruler-counter small-12 medium-6 column">
					<div class="scalp" ng-repeat="scalp in ruler.scalps track by $index">R.I.P</div>
				</div>
			</li>
		</ol>
	</section>

	<aside id="references">
		<div class="inner row">
			<h4 class="column">Sources</h4>
			<ul class="column">
				<li ng-repeat="ref in data.references track by $index">
					<a href="{{ref}}">{{ref}}</a>
				</li>
			</ul>
		</div>
	</div>

</main>

<? $app->document_foot() ?>