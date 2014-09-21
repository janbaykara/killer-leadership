<?php
require(dirname(__FILE__)."/php/config.php");

$app = new App();
$app->HTMLINJECT = "ng-app='app'";
$app->BODYINJECT = null;
$app->PAGETITLE = "KAKAW";

$app->SCAFFOLD_HEAD();
?>
<main id="wrapper" ng-controller="GraphController">
		<header class="row" id="timer">
			<h1>If the top 10 most terrible leaders in the history of the world were still at it today,
			in {{timeElapsed}} seconds they would have taken care of a collective {{combinedKillCount.toFixed(0)}} helpless plebs.</h1>
		</div>
		<ol class="row">
			<li class="ruler column small-12" ng-repeat="ruler in data.rulers">
				<div class="ruler-info">
					<h3>{{ruler.name}}</h3>
					<div class="ruler-desc">{{ruler.kills}} in {{ruler.tenure}} years means {{ruler.kps.toFixed(4)}} kills per second.</div>
				</div>
				<div class="ruler-counter">
					{{ruler.name}} would have killed {{ruler.killCount.toFixed(2)}} since you loaded this page...
				</div>
			</li>
		</ol>
	</div>
</main>
<? $app->SCAFFOLD_FOOT() ?>