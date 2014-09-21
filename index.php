<?php require("config.php");

$app = new App();
$app->HTMLINJECT = "ng-app='app'";
// $app->BODYINJECT;
// $app->PAGETITLE;

$app->document_head(); ?>

<main id="wrapper" ng-controller="mainController">
	<div class="row" id="timer">
		<div class="column placeholder-hero">If the top 10 most terrible leaders in the history of the world were still at it today,
		in {{timeElapsed}} seconds they would have taken care of a collective {{combinedKillCount.toFixed(0)}} helpless plebs.</div>
	</div>
	<ol class="row">
		<li class="ruler column small-12" ng-repeat="ruler in data.rulers">
			<div class="ruler-info">
				<h3>{{ruler.name}}</h3>
				<div class="ruler-desc">{{ruler.kills}} in {{ruler.tenure}} years means {{ruler.kps.toFixed(4)}} kills per second. At that rate, {{ruler.name}} would have killed {{ruler.killCount.toFixed(2)}} since you loaded this page...</div>
			</div>
			<div class="ruler-counter">
				Bodies build up here.
			</div>
		</li>
	</ol>
</main>

<? $app->document_foot() ?>