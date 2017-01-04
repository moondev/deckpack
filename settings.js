webpackJsonp([1,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var feedbackUrl = process.env.FEEDBACK_URL;
	var gateHost = process.env.API_HOST || '/gate';
	var bakeryHost = process.env.BAKERY_HOST || '/rosco';
	var bakeryDetailUrl = process.env.BAKERY_DETAIL_URL || bakeryHost + '/#/?region={{context.region}}&package={{context.package}}&detail=bake:{{context.status.resourceId}}';
	var authEndpoint = process.env.AUTH_ENDPOINT || gateHost + '/auth/user';
	var authEnabled = process.env.AUTH_ENABLED === 'false' ? false : true;
	var netflixMode = process.env.NETFLIX_MODE === 'true' ? true : false;
	var chaosEnabled = netflixMode || process.env.CHAOS_ENABLED === 'true' ? true : false;
	var fiatEnabled = process.env.FIAT_ENABLED === 'true' ? true : false;

	window.spinnakerSettings = {
	  checkForUpdates: true,
	  defaultProviders: ['aws', 'gce', 'azure', 'cf', 'kubernetes', 'titus', 'openstack'],
	  feedbackUrl: feedbackUrl,
	  gateUrl: gateHost,
	  bakeryDetailUrl: bakeryDetailUrl,
	  authEndpoint: authEndpoint,
	  pollSchedule: 30000,
	  defaultTimeZone: process.env.TIMEZONE || 'America/Los_Angeles', // see http://momentjs.com/timezone/docs/#/data-utilities/
	  defaultCategory: 'serverGroup',
	  defaultInstancePort: 80,
	  providers: {
	    azure: {
	      defaults: {
	        account: 'azure-test',
	        region: 'westus'
	      }
	    },
	    aws: {
	      defaults: {
	        account: 'test',
	        region: 'us-east-1',
	        iamRole: 'BaseIAMRole'
	      },
	      defaultSecurityGroups: [],
	      loadBalancers: {
	        // if true, VPC load balancers will be created as internal load balancers if the selected subnet has a purpose
	        // tag that starts with "internal"
	        inferInternalFlagFromSubnet: false
	      },
	      useAmiBlockDeviceMappings: false
	    },
	    gce: {
	      defaults: {
	        account: 'my-google-account',
	        region: 'us-central1',
	        zone: 'us-central1-f'
	      }
	    },
	    titus: {
	      defaults: {
	        account: 'titustestvpc',
	        region: 'us-east-1',
	        iamProfile: '{{application}}InstanceProfile'
	      }
	    },
	    openstack: {
	      defaults: {
	        account: 'test',
	        region: 'us-west-1'
	      }
	    },
	    kubernetes: {
	      defaults: {
	        account: 'my-kubernetes-account',
	        namespace: 'default'
	      }
	    },
	    appengine: {
	      defaults: {
	        account: 'my-appengine-account'
	      }
	    }
	  },
	  whatsNew: {
	    gistId: '32526cd608db3d811b38',
	    fileName: 'news.md'
	  },
	  notifications: {
	    email: {
	      enabled: true
	    },
	    hipchat: {
	      enabled: true,
	      botName: 'Skynet T-800'
	    },
	    sms: {
	      enabled: true
	    },
	    slack: {
	      enabled: true,
	      botName: 'spinnakerbot'
	    }
	  },
	  authEnabled: false,
	  authTtl: 600000,
	  gitSources: ['stash', 'github'],
	  triggerTypes: ['git', 'pipeline', 'docker', 'cron', 'jenkins'],
	  feature: {
	    fiatEnabled: false,
	    pipelines: true,
	    notifications: true,
	    fastProperty: true,
	    vpcMigrator: true,
	    clusterDiff: false,
	    roscoMode: true,
	    netflixMode: false,
	    chaosMonkey: chaosEnabled,
	    // whether stages affecting infrastructure (like "Create Load Balancer") should be enabled or not
	    infrastructureStages: process.env.INFRA_STAGES === 'enabled',
	    jobs: true,
	    snapshots: false
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(536)))

/***/ }
]);
