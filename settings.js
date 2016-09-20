webpackJsonp([1,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var feedbackUrl = process.env.FEEDBACK_URL || 'https://hootch.test.netflix.net/submit';
	var gateHost = '/gate';
	var bakeryDetailUrl = '/bakery' + '/api/v1/global/logs/{{context.status.id}}?html=true'
	var authEndpoint = process.env.AUTH_ENDPOINT || 'https://spinnaker-api-prestaging.mgmttest.netflix.net/auth/user';
	var authEnabled = false;

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
	        region: 'us-east-1'
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
	        region: 'us-east-1'
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
	  authEnabled: authEnabled,
	  authTtl: 600000,
	  gitSources: ['stash', 'github'],
	  triggerTypes: ['git', 'pipeline', 'docker', 'cron', 'jenkins'],
	  feature: {
	    pipelines: true,
	    notifications: true,
	    fastProperty: true,
	    vpcMigrator: true,
	    clusterDiff: true,
	    roscoMode: true,
	    netflixMode: false,
	    // whether stages affecting infrastructure (like "Create Load Balancer") should be enabled or not
	    infrastructureStages: process.env.INFRA_STAGES === 'enabled',
	    jobs: false,
	    serialization: false
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(287)))

/***/ }
]);