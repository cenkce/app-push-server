/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GithubCallbackListParams {
  code: string;
  state?: string;
}

export interface UpdateCheckListParams {
  appVersion: string;
  /** @minLength 10 */
  deploymentKey: string;
  packageHash?: string;
  label?: string;
  clientUniqueId?: string;
  /** @default false */
  isCompanion?: boolean;
}

export interface V01PublicCodepushUpdateCheckListParams {
  app_version: string;
  /** @minLength 10 */
  deployment_key: string;
  package_hash?: string;
  label?: string;
  client_unique_id?: string;
  /** @default false */
  is_companion?: boolean;
}

export interface ReportStatusDeployCreatePayload {
  deploymentKey: string;
  clientUniqueId: string;
  label?: string;
  appVersion: string;
  previousDeploymentKey?: string;
  previousLabelOrAppVersion?: string;
  status?: "DeploymentSucceeded" | "DeploymentFailed";
}

export interface V01PublicCodepushReportStatusDeployCreatePayload {
  deploymentKey: string;
  clientUniqueId: string;
  label?: string;
  appVersion: string;
  previousDeploymentKey?: string;
  previousLabelOrAppVersion?: string;
  status?: "DeploymentSucceeded" | "DeploymentFailed";
}

export interface ReportStatusDownloadCreatePayload {
  deploymentKey: string;
  label: string;
  clientUniqueId: string;
}

export interface V01PublicCodepushReportStatusDownloadCreatePayload {
  deploymentKey: string;
  label: string;
  clientUniqueId: string;
}

export interface AccessKeysCreatePayload {
  /** @minLength 1 */
  friendlyName: string;
  ttl?: number;
  createdBy?: string;
}

export interface AccessKeysAccessKeyNamePartialUpdatePayload {
  friendlyName?: string;
  /** @min 0 */
  ttl?: number;
}

export interface AppsCreatePayload {
  /** @minLength 1 */
  name: string;
  manuallyProvisionDeployments?: boolean;
}

export interface AppsAppNamePartialUpdatePayload {
  name: string;
}

export interface AppsAppNameDeploymentsCreatePayload {
  name: string;
  key?: string;
}

export interface AppsAppNameDeploymentsDeploymentNamePartialUpdatePayload {
  name: string;
}

export interface AppsAppNameDeploymentsDeploymentNameReleaseCreatePayload {
  package: any;
  packageInfo: string;
}

export interface AppsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreatePayload {
  packageInfo?: {
    /** @pattern ^\d+\.\d+\.\d+$ */
    appVersion?: string;
    blobUrl?: string;
    description?: string;
    diffPackageMap?: Record<
      string,
      {
        size: number;
        url: string;
      }
    >;
    isDisabled?: boolean;
    isMandatory?: boolean;
    label?: string;
    manifestBlobUrl?: string;
    originalDeployment?: string;
    originalLabel?: string;
    packageHash?: string;
    releasedBy?: string;
    releaseMethod?: "Upload" | "Promote" | "Rollback";
    /**
     * @min 0
     * @max 100
     */
    rollout?: number | null;
    size?: number;
    uploadTime?: number;
  };
}

export namespace Auth {
  /**
   * No description
   * @name GithubLoginList
   * @request GET:/auth/github/login
   * @response `302` `void` Redirect to GitHub OAuth
   */
  export namespace GithubLoginList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
 * No description
 * @name GithubCallbackList
 * @request GET:/auth/github/callback
 * @response `302` `void` Redirect to dashboard with session
 * @response `400` `{
    error: string,
    error_description?: string,

}` Login error
*/
  export namespace GithubCallbackList {
    export type RequestParams = {};
    export type RequestQuery = {
      code: string;
      state?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @name LogoutList
   * @request GET:/auth/logout
   * @response `302` `void` Redirect to login page
   */
  export namespace LogoutList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Acquisition {
  /**
 * No description
 * @name UpdateCheckList
 * @request GET:/acquisition/updateCheck
 * @response `200` `{
    updateInfo: {
    isAvailable: boolean,
    isMandatory: boolean,
    appVersion: string,
    packageHash?: string,
    label?: string,
    packageSize?: number,
    description?: string,
    downloadURL?: string,
    shouldRunBinaryVersion?: boolean,
    updateAppVersion?: boolean,

},

}`
*/
  export namespace UpdateCheckList {
    export type RequestParams = {};
    export type RequestQuery = {
      appVersion: string;
      /** @minLength 10 */
      deploymentKey: string;
      packageHash?: string;
      label?: string;
      clientUniqueId?: string;
      /** @default false */
      isCompanion?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      updateInfo: {
        isAvailable: boolean;
        isMandatory: boolean;
        appVersion: string;
        packageHash?: string;
        label?: string;
        packageSize?: number;
        description?: string;
        downloadURL?: string;
        shouldRunBinaryVersion?: boolean;
        updateAppVersion?: boolean;
      };
    };
  }

  /**
 * No description
 * @name V01PublicCodepushUpdateCheckList
 * @request GET:/acquisition/v0.1/public/codepush/update_check
 * @response `200` `{
    update_info: {
    is_available: boolean,
    is_mandatory: boolean,
    app_version: string,
    package_hash?: string,
    label?: string,
    package_size?: number,
    description?: string,
    download_url?: string,
    should_run_binary_version?: boolean,
    update_app_version?: boolean,

},

}`
*/
  export namespace V01PublicCodepushUpdateCheckList {
    export type RequestParams = {};
    export type RequestQuery = {
      app_version: string;
      /** @minLength 10 */
      deployment_key: string;
      package_hash?: string;
      label?: string;
      client_unique_id?: string;
      /** @default false */
      is_companion?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      update_info: {
        is_available: boolean;
        is_mandatory: boolean;
        app_version: string;
        package_hash?: string;
        label?: string;
        package_size?: number;
        description?: string;
        download_url?: string;
        should_run_binary_version?: boolean;
        update_app_version?: boolean;
      };
    };
  }

  /**
 * No description
 * @name ReportStatusDeployCreate
 * @request POST:/acquisition/reportStatus/deploy
 * @response `200` `{
    status: "ok",

}`
*/
  export namespace ReportStatusDeployCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReportStatusDeployCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "ok";
    };
  }

  /**
 * No description
 * @name V01PublicCodepushReportStatusDeployCreate
 * @request POST:/acquisition/v0.1/public/codepush/report_status/deploy
 * @response `200` `{
    status: "ok",

}`
*/
  export namespace V01PublicCodepushReportStatusDeployCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V01PublicCodepushReportStatusDeployCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "ok";
    };
  }

  /**
 * No description
 * @name ReportStatusDownloadCreate
 * @request POST:/acquisition/reportStatus/download
 * @response `200` `{
    status: "ok",

}`
*/
  export namespace ReportStatusDownloadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReportStatusDownloadCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "ok";
    };
  }

  /**
 * No description
 * @name V01PublicCodepushReportStatusDownloadCreate
 * @request POST:/acquisition/v0.1/public/codepush/report_status/download
 * @response `200` `{
    status: "ok",

}`
*/
  export namespace V01PublicCodepushReportStatusDownloadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = V01PublicCodepushReportStatusDownloadCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      status: "ok";
    };
  }
}

export namespace Management {
  /**
 * No description
 * @name AccountList
 * @request GET:/management/account
 * @response `200` `{
    account: {
    id: string,
    email: string,
    name: string,
    linkedProviders: (string)[],
    gitHubId?: string,
    createdTime: number,

},

}` Account details retrieved successfully
*/
  export namespace AccountList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account: {
        id: string;
        email: string;
        name: string;
        linkedProviders: string[];
        gitHubId?: string;
        createdTime: number;
      };
    };
  }

  /**
 * No description
 * @name AccessKeysList
 * @request GET:/management/accessKeys
 * @response `200` `{
    accessKeys: ({
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

})[],

}` Access keys retrieved successfully
*/
  export namespace AccessKeysList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessKeys: {
        id: string;
        name?: string;
        friendlyName: string;
        createdBy: string;
        createdTime: number;
        expires: number;
        description?: string;
        isSession?: boolean;
      }[];
    };
  }

  /**
 * No description
 * @name AccessKeysCreate
 * @request POST:/management/accessKeys
 * @response `201` `{
    accessKey: {
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

},

}` Access key created successfully
*/
  export namespace AccessKeysCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AccessKeysCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessKey: {
        id: string;
        name?: string;
        friendlyName: string;
        createdBy: string;
        createdTime: number;
        expires: number;
        description?: string;
        isSession?: boolean;
      };
    };
  }

  /**
 * No description
 * @name AccessKeysAccessKeyNameList
 * @request GET:/management/accessKeys/:accessKeyName
 * @response `200` `{
    accessKey: {
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

},

}` Access key retrieved successfully
*/
  export namespace AccessKeysAccessKeyNameList {
    export type RequestParams = {
      accessKeyName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessKey: {
        id: string;
        name?: string;
        friendlyName: string;
        createdBy: string;
        createdTime: number;
        expires: number;
        description?: string;
        isSession?: boolean;
      };
    };
  }

  /**
 * No description
 * @name AccessKeysAccessKeyNamePartialUpdate
 * @request PATCH:/management/accessKeys/:accessKeyName
 * @response `200` `{
    accessKey: {
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

},

}` Access key updated successfully
*/
  export namespace AccessKeysAccessKeyNamePartialUpdate {
    export type RequestParams = {
      accessKeyName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AccessKeysAccessKeyNamePartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessKey: {
        id: string;
        name?: string;
        friendlyName: string;
        createdBy: string;
        createdTime: number;
        expires: number;
        description?: string;
        isSession?: boolean;
      };
    };
  }

  /**
   * No description
   * @name AccessKeysAccessKeyNameDelete
   * @request DELETE:/management/accessKeys/:accessKeyName
   * @response `204` `void` Access key removed successfully
   */
  export namespace AccessKeysAccessKeyNameDelete {
    export type RequestParams = {
      accessKeyName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * No description
 * @name AppsList
 * @request GET:/management/apps
 * @response `200` `{
    apps: ({
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

})[],

}` Apps retrieved successfully
*/
  export namespace AppsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      apps: {
        id: string;
        name: string;
        /** @default {} */
        collaborators?: Record<
          string,
          {
            accountId: string;
            permission: "Owner" | "Collaborator";
            isCurrentAccount?: boolean | null;
          }
        >;
        deployments: string[];
        createdTime: number;
      }[];
    };
  }

  /**
 * No description
 * @name AppsCreate
 * @request POST:/management/apps
 * @response `201` `{
    app: {
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

},

}` App created successfully
*/
  export namespace AppsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AppsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      app: {
        id: string;
        name: string;
        /** @default {} */
        collaborators?: Record<
          string,
          {
            accountId: string;
            permission: "Owner" | "Collaborator";
            isCurrentAccount?: boolean | null;
          }
        >;
        deployments: string[];
        createdTime: number;
      };
    };
  }

  /**
 * @description Get app details
 * @name AppsAppNameList
 * @request GET:/management/apps/:appName
 * @response `200` `{
    app: {
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

},

}` App details retrieved successfully
*/
  export namespace AppsAppNameList {
    export type RequestParams = {
      appName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      app: {
        id: string;
        name: string;
        /** @default {} */
        collaborators?: Record<
          string,
          {
            accountId: string;
            permission: "Owner" | "Collaborator";
            isCurrentAccount?: boolean | null;
          }
        >;
        deployments: string[];
        createdTime: number;
      };
    };
  }

  /**
 * @description Update app details
 * @name AppsAppNamePartialUpdate
 * @request PATCH:/management/apps/:appName
 * @response `200` `{
    app: {
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

},

}` App updated successfully
*/
  export namespace AppsAppNamePartialUpdate {
    export type RequestParams = {
      appName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AppsAppNamePartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      app: {
        id: string;
        name: string;
        /** @default {} */
        collaborators?: Record<
          string,
          {
            accountId: string;
            permission: "Owner" | "Collaborator";
            isCurrentAccount?: boolean | null;
          }
        >;
        deployments: string[];
        createdTime: number;
      };
    };
  }

  /**
   * @description Delete an app
   * @name AppsAppNameDelete
   * @request DELETE:/management/apps/:appName
   * @response `204` `void` App deleted successfully
   */
  export namespace AppsAppNameDelete {
    export type RequestParams = {
      appName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description Transfer app ownership
   * @name AppsAppNameTransferEmailCreate
   * @request POST:/management/apps/:appName/transfer/:email
   * @response `201` `void` App transferred successfully
   */
  export namespace AppsAppNameTransferEmailCreate {
    export type RequestParams = {
      appName: string;
      /** @format email */
      email: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * @description List app deployments
 * @name AppsAppNameDeploymentsList
 * @request GET:/management/apps/:appName/deployments
 * @response `200` `{
    deployments: ({
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

})[],

}` Deployments retrieved successfully
*/
  export namespace AppsAppNameDeploymentsList {
    export type RequestParams = {
      appName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      deployments: {
        id: string;
        name: string;
        key: string;
        package?: {
          /** @pattern ^\d+\.\d+\.\d+$ */
          appVersion: string;
          blobUrl: string;
          description?: string;
          diffPackageMap?: Record<
            string,
            {
              size: number;
              url: string;
            }
          >;
          isDisabled: boolean;
          isMandatory: boolean;
          label?: string;
          manifestBlobUrl: string;
          originalDeployment?: string;
          originalLabel?: string;
          packageHash: string;
          releasedBy?: string;
          releaseMethod?: "Upload" | "Promote" | "Rollback";
          /**
           * @min 0
           * @max 100
           */
          rollout?: number | null;
          size: number;
          uploadTime: number;
        };
        createdTime: number;
      }[];
    };
  }

  /**
 * @description Create new deployment
 * @name AppsAppNameDeploymentsCreate
 * @request POST:/management/apps/:appName/deployments
 * @response `201` `{
    deployment: {
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

},

}` Deployment created successfully
*/
  export namespace AppsAppNameDeploymentsCreate {
    export type RequestParams = {
      appName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AppsAppNameDeploymentsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      deployment: {
        id: string;
        name: string;
        key: string;
        package?: {
          /** @pattern ^\d+\.\d+\.\d+$ */
          appVersion: string;
          blobUrl: string;
          description?: string;
          diffPackageMap?: Record<
            string,
            {
              size: number;
              url: string;
            }
          >;
          isDisabled: boolean;
          isMandatory: boolean;
          label?: string;
          manifestBlobUrl: string;
          originalDeployment?: string;
          originalLabel?: string;
          packageHash: string;
          releasedBy?: string;
          releaseMethod?: "Upload" | "Promote" | "Rollback";
          /**
           * @min 0
           * @max 100
           */
          rollout?: number | null;
          size: number;
          uploadTime: number;
        };
        createdTime: number;
      };
    };
  }

  /**
 * @description Get deployment details
 * @name AppsAppNameDeploymentsDeploymentNameList
 * @request GET:/management/apps/:appName/deployments/:deploymentName
 * @response `200` `{
    deployment: {
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

},

}` Deployment details retrieved successfully
*/
  export namespace AppsAppNameDeploymentsDeploymentNameList {
    export type RequestParams = {
      appName: string;
      deploymentName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      deployment: {
        id: string;
        name: string;
        key: string;
        package?: {
          /** @pattern ^\d+\.\d+\.\d+$ */
          appVersion: string;
          blobUrl: string;
          description?: string;
          diffPackageMap?: Record<
            string,
            {
              size: number;
              url: string;
            }
          >;
          isDisabled: boolean;
          isMandatory: boolean;
          label?: string;
          manifestBlobUrl: string;
          originalDeployment?: string;
          originalLabel?: string;
          packageHash: string;
          releasedBy?: string;
          releaseMethod?: "Upload" | "Promote" | "Rollback";
          /**
           * @min 0
           * @max 100
           */
          rollout?: number | null;
          size: number;
          uploadTime: number;
        };
        createdTime: number;
      };
    };
  }

  /**
 * @description Update deployment
 * @name AppsAppNameDeploymentsDeploymentNamePartialUpdate
 * @request PATCH:/management/apps/:appName/deployments/:deploymentName
 * @response `200` `{
    deployment: {
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

},

}` Deployment updated successfully
*/
  export namespace AppsAppNameDeploymentsDeploymentNamePartialUpdate {
    export type RequestParams = {
      appName: string;
      deploymentName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AppsAppNameDeploymentsDeploymentNamePartialUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      deployment: {
        id: string;
        name: string;
        key: string;
        package?: {
          /** @pattern ^\d+\.\d+\.\d+$ */
          appVersion: string;
          blobUrl: string;
          description?: string;
          diffPackageMap?: Record<
            string,
            {
              size: number;
              url: string;
            }
          >;
          isDisabled: boolean;
          isMandatory: boolean;
          label?: string;
          manifestBlobUrl: string;
          originalDeployment?: string;
          originalLabel?: string;
          packageHash: string;
          releasedBy?: string;
          releaseMethod?: "Upload" | "Promote" | "Rollback";
          /**
           * @min 0
           * @max 100
           */
          rollout?: number | null;
          size: number;
          uploadTime: number;
        };
        createdTime: number;
      };
    };
  }

  /**
   * @description Remove deployment
   * @name AppsAppNameDeploymentsDeploymentNameDelete
   * @request DELETE:/management/apps/:appName/deployments/:deploymentName
   * @response `204` `void` Deployment removed successfully
   */
  export namespace AppsAppNameDeploymentsDeploymentNameDelete {
    export type RequestParams = {
      appName: string;
      deploymentName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * @description Release new package version
 * @name AppsAppNameDeploymentsDeploymentNameReleaseCreate
 * @request POST:/management/apps/:appName/deployments/:deploymentName/release
 * @response `201` `{
    package: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},

}` Package released successfully
*/
  export namespace AppsAppNameDeploymentsDeploymentNameReleaseCreate {
    export type RequestParams = {
      appName: string;
      deploymentName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AppsAppNameDeploymentsDeploymentNameReleaseCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      package: {
        /** @pattern ^\d+\.\d+\.\d+$ */
        appVersion: string;
        blobUrl: string;
        description?: string;
        diffPackageMap?: Record<
          string,
          {
            size: number;
            url: string;
          }
        >;
        isDisabled: boolean;
        isMandatory: boolean;
        label?: string;
        manifestBlobUrl: string;
        originalDeployment?: string;
        originalLabel?: string;
        packageHash: string;
        releasedBy?: string;
        releaseMethod?: "Upload" | "Promote" | "Rollback";
        /**
         * @min 0
         * @max 100
         */
        rollout?: number | null;
        size: number;
        uploadTime: number;
      };
    };
  }

  /**
 * @description Promote deployment to another deployment
 * @name AppsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreate
 * @request POST:/management/apps/:appName/deployments/:sourceDeploymentName/promote/:destDeploymentName
 * @response `201` `{
    package: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},

}` Deployment promoted successfully
*/
  export namespace AppsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreate {
    export type RequestParams = {
      appName: string;
      sourceDeploymentName: string;
      destDeploymentName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AppsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      package: {
        /** @pattern ^\d+\.\d+\.\d+$ */
        appVersion: string;
        blobUrl: string;
        description?: string;
        diffPackageMap?: Record<
          string,
          {
            size: number;
            url: string;
          }
        >;
        isDisabled: boolean;
        isMandatory: boolean;
        label?: string;
        manifestBlobUrl: string;
        originalDeployment?: string;
        originalLabel?: string;
        packageHash: string;
        releasedBy?: string;
        releaseMethod?: "Upload" | "Promote" | "Rollback";
        /**
         * @min 0
         * @max 100
         */
        rollout?: number | null;
        size: number;
        uploadTime: number;
      };
    };
  }

  /**
 * @description Rollback deployment to previous release
 * @name AppsAppNameDeploymentsDeploymentNameRollbackTargetReleaseCreate
 * @request POST:/management/apps/:appName/deployments/:deploymentName/rollback/:targetRelease?
 * @response `201` `{
    package: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},

}` Deployment rolled back successfully
*/
  export namespace AppsAppNameDeploymentsDeploymentNameRollbackTargetReleaseCreate {
    export type RequestParams = {
      appName: string;
      deploymentName: string;
      targetRelease?: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      package: {
        /** @pattern ^\d+\.\d+\.\d+$ */
        appVersion: string;
        blobUrl: string;
        description?: string;
        diffPackageMap?: Record<
          string,
          {
            size: number;
            url: string;
          }
        >;
        isDisabled: boolean;
        isMandatory: boolean;
        label?: string;
        manifestBlobUrl: string;
        originalDeployment?: string;
        originalLabel?: string;
        packageHash: string;
        releasedBy?: string;
        releaseMethod?: "Upload" | "Promote" | "Rollback";
        /**
         * @min 0
         * @max 100
         */
        rollout?: number | null;
        size: number;
        uploadTime: number;
      };
    };
  }

  /**
 * @description List app collaborators
 * @name AppsAppNameCollaboratorsList
 * @request GET:/management/apps/:appName/collaborators
 * @response `200` `{
    collaborators: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,

}` Collaborators retrieved successfully
*/
  export namespace AppsAppNameCollaboratorsList {
    export type RequestParams = {
      appName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      collaborators: Record<
        string,
        {
          accountId: string;
          permission: "Owner" | "Collaborator";
          isCurrentAccount?: boolean | null;
        }
      >;
    };
  }

  /**
   * @description Add collaborator to app
   * @name AppsAppNameCollaboratorsEmailCreate
   * @request POST:/management/apps/:appName/collaborators/:email
   * @response `201` `void` Collaborator added successfully
   */
  export namespace AppsAppNameCollaboratorsEmailCreate {
    export type RequestParams = {
      appName: string;
      /** @format email */
      email: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description Remove collaborator from app
   * @name AppsAppNameCollaboratorsEmailDelete
   * @request DELETE:/management/apps/:appName/collaborators/:email
   * @response `204` `void` Collaborator removed successfully
   */
  export namespace AppsAppNameCollaboratorsEmailDelete {
    export type RequestParams = {
      appName: string;
      /** @format email */
      email: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * @description Get deployment metrics
 * @name AppsAppNameDeploymentsDeploymentNameMetricsList
 * @request GET:/management/apps/:appName/deployments/:deploymentName/metrics
 * @response `200` `{
    metrics: Record<string,{
    active: number,
    downloads?: number,
    installed?: number,
    failed?: number,

}>,

}` Metrics retrieved successfully
*/
  export namespace AppsAppNameDeploymentsDeploymentNameMetricsList {
    export type RequestParams = {
      appName: string;
      deploymentName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      metrics: Record<
        string,
        {
          active: number;
          downloads?: number;
          installed?: number;
          failed?: number;
        }
      >;
    };
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title CodePush API
 * @version 1.0.0
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  auth = {
    /**
     * No description
     *
     * @name GithubLoginList
     * @request GET:/auth/github/login
     * @response `302` `void` Redirect to GitHub OAuth
     */
    githubLoginList: (params: RequestParams = {}) =>
      this.http.request<any, void>({
        path: `/auth/github/login`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 *
 * @name GithubCallbackList
 * @request GET:/auth/github/callback
 * @response `302` `void` Redirect to dashboard with session
 * @response `400` `{
    error: string,
    error_description?: string,

}` Login error
 */
    githubCallbackList: (query: GithubCallbackListParams, params: RequestParams = {}) =>
      this.http.request<
        any,
        void | {
          error: string;
          error_description?: string;
        }
      >({
        path: `/auth/github/callback`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @name LogoutList
     * @request GET:/auth/logout
     * @response `302` `void` Redirect to login page
     */
    logoutList: (params: RequestParams = {}) =>
      this.http.request<any, void>({
        path: `/auth/logout`,
        method: "GET",
        ...params,
      }),
  };
  acquisition = {
    /**
 * No description
 *
 * @name UpdateCheckList
 * @request GET:/acquisition/updateCheck
 * @response `200` `{
    updateInfo: {
    isAvailable: boolean,
    isMandatory: boolean,
    appVersion: string,
    packageHash?: string,
    label?: string,
    packageSize?: number,
    description?: string,
    downloadURL?: string,
    shouldRunBinaryVersion?: boolean,
    updateAppVersion?: boolean,

},

}`
 */
    updateCheckList: (query: UpdateCheckListParams, params: RequestParams = {}) =>
      this.http.request<
        {
          updateInfo: {
            isAvailable: boolean;
            isMandatory: boolean;
            appVersion: string;
            packageHash?: string;
            label?: string;
            packageSize?: number;
            description?: string;
            downloadURL?: string;
            shouldRunBinaryVersion?: boolean;
            updateAppVersion?: boolean;
          };
        },
        any
      >({
        path: `/acquisition/updateCheck`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name V01PublicCodepushUpdateCheckList
 * @request GET:/acquisition/v0.1/public/codepush/update_check
 * @response `200` `{
    update_info: {
    is_available: boolean,
    is_mandatory: boolean,
    app_version: string,
    package_hash?: string,
    label?: string,
    package_size?: number,
    description?: string,
    download_url?: string,
    should_run_binary_version?: boolean,
    update_app_version?: boolean,

},

}`
 */
    v01PublicCodepushUpdateCheckList: (query: V01PublicCodepushUpdateCheckListParams, params: RequestParams = {}) =>
      this.http.request<
        {
          update_info: {
            is_available: boolean;
            is_mandatory: boolean;
            app_version: string;
            package_hash?: string;
            label?: string;
            package_size?: number;
            description?: string;
            download_url?: string;
            should_run_binary_version?: boolean;
            update_app_version?: boolean;
          };
        },
        any
      >({
        path: `/v0.1/public/codepush/update_check`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name ReportStatusDeployCreate
 * @request POST:/acquisition/reportStatus/deploy
 * @response `200` `{
    status: "ok",

}`
 */
    reportStatusDeployCreate: (data: ReportStatusDeployCreatePayload, params: RequestParams = {}) =>
      this.http.request<
        {
          status: "ok";
        },
        any
      >({
        path: `/acquisition/reportStatus/deploy`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name V01PublicCodepushReportStatusDeployCreate
 * @request POST:/acquisition/v0.1/public/codepush/report_status/deploy
 * @response `200` `{
    status: "ok",

}`
 */
    v01PublicCodepushReportStatusDeployCreate: (
      data: V01PublicCodepushReportStatusDeployCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          status: "ok";
        },
        any
      >({
        path: `/acquisition/v0.1/public/codepush/report_status/deploy`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name ReportStatusDownloadCreate
 * @request POST:/acquisition/reportStatus/download
 * @response `200` `{
    status: "ok",

}`
 */
    reportStatusDownloadCreate: (data: ReportStatusDownloadCreatePayload, params: RequestParams = {}) =>
      this.http.request<
        {
          status: "ok";
        },
        any
      >({
        path: `/acquisition/reportStatus/download`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name V01PublicCodepushReportStatusDownloadCreate
 * @request POST:/acquisition/v0.1/public/codepush/report_status/download
 * @response `200` `{
    status: "ok",

}`
 */
    v01PublicCodepushReportStatusDownloadCreate: (
      data: V01PublicCodepushReportStatusDownloadCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          status: "ok";
        },
        any
      >({
        path: `/acquisition/v0.1/public/codepush/report_status/download`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  management = {
    /**
 * No description
 *
 * @name AccountList
 * @request GET:/management/account
 * @response `200` `{
    account: {
    id: string,
    email: string,
    name: string,
    linkedProviders: (string)[],
    gitHubId?: string,
    createdTime: number,

},

}` Account details retrieved successfully
 */
    accountList: (params: RequestParams = {}) =>
      this.http.request<
        {
          account: {
            id: string;
            email: string;
            name: string;
            linkedProviders: string[];
            gitHubId?: string;
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/account`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name AccessKeysList
 * @request GET:/management/accessKeys
 * @response `200` `{
    accessKeys: ({
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

})[],

}` Access keys retrieved successfully
 */
    accessKeysList: (params: RequestParams = {}) =>
      this.http.request<
        {
          accessKeys: {
            id: string;
            name?: string;
            friendlyName: string;
            createdBy: string;
            createdTime: number;
            expires: number;
            description?: string;
            isSession?: boolean;
          }[];
        },
        any
      >({
        path: `/management/accessKeys`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name AccessKeysCreate
 * @request POST:/management/accessKeys
 * @response `201` `{
    accessKey: {
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

},

}` Access key created successfully
 */
    accessKeysCreate: (data: AccessKeysCreatePayload, params: RequestParams = {}) =>
      this.http.request<
        {
          accessKey: {
            id: string;
            name?: string;
            friendlyName: string;
            createdBy: string;
            createdTime: number;
            expires: number;
            description?: string;
            isSession?: boolean;
          };
        },
        any
      >({
        path: `/management/accessKeys`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name AccessKeysAccessKeyNameList
 * @request GET:/management/accessKeys/:accessKeyName
 * @response `200` `{
    accessKey: {
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

},

}` Access key retrieved successfully
 */
    accessKeysAccessKeyNameList: (accessKeyName: string, params: RequestParams = {}) =>
      this.http.request<
        {
          accessKey: {
            id: string;
            name?: string;
            friendlyName: string;
            createdBy: string;
            createdTime: number;
            expires: number;
            description?: string;
            isSession?: boolean;
          };
        },
        any
      >({
        path: `/management/accessKeys/${accessKeyName}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name AccessKeysAccessKeyNamePartialUpdate
 * @request PATCH:/management/accessKeys/:accessKeyName
 * @response `200` `{
    accessKey: {
    id: string,
    name?: string,
    friendlyName: string,
    createdBy: string,
    createdTime: number,
    expires: number,
    description?: string,
    isSession?: boolean,

},

}` Access key updated successfully
 */
    accessKeysAccessKeyNamePartialUpdate: (
      accessKeyName: string,
      data: AccessKeysAccessKeyNamePartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          accessKey: {
            id: string;
            name?: string;
            friendlyName: string;
            createdBy: string;
            createdTime: number;
            expires: number;
            description?: string;
            isSession?: boolean;
          };
        },
        any
      >({
        path: `/management/accessKeys/${accessKeyName}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AccessKeysAccessKeyNameDelete
     * @request DELETE:/management/accessKeys/:accessKeyName
     * @response `204` `void` Access key removed successfully
     */
    accessKeysAccessKeyNameDelete: (accessKeyName: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/management/accessKeys/${accessKeyName}`,
        method: "DELETE",
        ...params,
      }),

    /**
 * No description
 *
 * @name AppsList
 * @request GET:/management/apps
 * @response `200` `{
    apps: ({
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

})[],

}` Apps retrieved successfully
 */
    appsList: (params: RequestParams = {}) =>
      this.http.request<
        {
          apps: {
            id: string;
            name: string;
            /** @default {} */
            collaborators?: Record<
              string,
              {
                accountId: string;
                permission: "Owner" | "Collaborator";
                isCurrentAccount?: boolean | null;
              }
            >;
            deployments: string[];
            createdTime: number;
          }[];
        },
        any
      >({
        path: `/management/apps`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @name AppsCreate
 * @request POST:/management/apps
 * @response `201` `{
    app: {
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

},

}` App created successfully
 */
    appsCreate: (data: AppsCreatePayload, params: RequestParams = {}) =>
      this.http.request<
        {
          app: {
            id: string;
            name: string;
            /** @default {} */
            collaborators?: Record<
              string,
              {
                accountId: string;
                permission: "Owner" | "Collaborator";
                isCurrentAccount?: boolean | null;
              }
            >;
            deployments: string[];
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/apps`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Get app details
 *
 * @name AppsAppNameList
 * @request GET:/management/apps/:appName
 * @response `200` `{
    app: {
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

},

}` App details retrieved successfully
 */
    appsAppNameList: (appName: string, params: RequestParams = {}) =>
      this.http.request<
        {
          app: {
            id: string;
            name: string;
            /** @default {} */
            collaborators?: Record<
              string,
              {
                accountId: string;
                permission: "Owner" | "Collaborator";
                isCurrentAccount?: boolean | null;
              }
            >;
            deployments: string[];
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * @description Update app details
 *
 * @name AppsAppNamePartialUpdate
 * @request PATCH:/management/apps/:appName
 * @response `200` `{
    app: {
    id: string,
    name: string,
  \** @default {} *\
    collaborators?: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,
    deployments: (string)[],
    createdTime: number,

},

}` App updated successfully
 */
    appsAppNamePartialUpdate: (appName: string, data: AppsAppNamePartialUpdatePayload, params: RequestParams = {}) =>
      this.http.request<
        {
          app: {
            id: string;
            name: string;
            /** @default {} */
            collaborators?: Record<
              string,
              {
                accountId: string;
                permission: "Owner" | "Collaborator";
                isCurrentAccount?: boolean | null;
              }
            >;
            deployments: string[];
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an app
     *
     * @name AppsAppNameDelete
     * @request DELETE:/management/apps/:appName
     * @response `204` `void` App deleted successfully
     */
    appsAppNameDelete: (appName: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/management/apps/${appName}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Transfer app ownership
     *
     * @name AppsAppNameTransferEmailCreate
     * @request POST:/management/apps/:appName/transfer/:email
     * @response `201` `void` App transferred successfully
     */
    appsAppNameTransferEmailCreate: (appName: string, email: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/management/apps/${appName}/transfer/${email}`,
        method: "POST",
        ...params,
      }),

    /**
 * @description List app deployments
 *
 * @name AppsAppNameDeploymentsList
 * @request GET:/management/apps/:appName/deployments
 * @response `200` `{
    deployments: ({
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

})[],

}` Deployments retrieved successfully
 */
    appsAppNameDeploymentsList: (appName: string, params: RequestParams = {}) =>
      this.http.request<
        {
          deployments: {
            id: string;
            name: string;
            key: string;
            package?: {
              /** @pattern ^\d+\.\d+\.\d+$ */
              appVersion: string;
              blobUrl: string;
              description?: string;
              diffPackageMap?: Record<
                string,
                {
                  size: number;
                  url: string;
                }
              >;
              isDisabled: boolean;
              isMandatory: boolean;
              label?: string;
              manifestBlobUrl: string;
              originalDeployment?: string;
              originalLabel?: string;
              packageHash: string;
              releasedBy?: string;
              releaseMethod?: "Upload" | "Promote" | "Rollback";
              /**
               * @min 0
               * @max 100
               */
              rollout?: number | null;
              size: number;
              uploadTime: number;
            };
            createdTime: number;
          }[];
        },
        any
      >({
        path: `/management/apps/${appName}/deployments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * @description Create new deployment
 *
 * @name AppsAppNameDeploymentsCreate
 * @request POST:/management/apps/:appName/deployments
 * @response `201` `{
    deployment: {
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

},

}` Deployment created successfully
 */
    appsAppNameDeploymentsCreate: (
      appName: string,
      data: AppsAppNameDeploymentsCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          deployment: {
            id: string;
            name: string;
            key: string;
            package?: {
              /** @pattern ^\d+\.\d+\.\d+$ */
              appVersion: string;
              blobUrl: string;
              description?: string;
              diffPackageMap?: Record<
                string,
                {
                  size: number;
                  url: string;
                }
              >;
              isDisabled: boolean;
              isMandatory: boolean;
              label?: string;
              manifestBlobUrl: string;
              originalDeployment?: string;
              originalLabel?: string;
              packageHash: string;
              releasedBy?: string;
              releaseMethod?: "Upload" | "Promote" | "Rollback";
              /**
               * @min 0
               * @max 100
               */
              rollout?: number | null;
              size: number;
              uploadTime: number;
            };
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}/deployments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Get deployment details
 *
 * @name AppsAppNameDeploymentsDeploymentNameList
 * @request GET:/management/apps/:appName/deployments/:deploymentName
 * @response `200` `{
    deployment: {
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

},

}` Deployment details retrieved successfully
 */
    appsAppNameDeploymentsDeploymentNameList: (appName: string, deploymentName: string, params: RequestParams = {}) =>
      this.http.request<
        {
          deployment: {
            id: string;
            name: string;
            key: string;
            package?: {
              /** @pattern ^\d+\.\d+\.\d+$ */
              appVersion: string;
              blobUrl: string;
              description?: string;
              diffPackageMap?: Record<
                string,
                {
                  size: number;
                  url: string;
                }
              >;
              isDisabled: boolean;
              isMandatory: boolean;
              label?: string;
              manifestBlobUrl: string;
              originalDeployment?: string;
              originalLabel?: string;
              packageHash: string;
              releasedBy?: string;
              releaseMethod?: "Upload" | "Promote" | "Rollback";
              /**
               * @min 0
               * @max 100
               */
              rollout?: number | null;
              size: number;
              uploadTime: number;
            };
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}/deployments/${deploymentName}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * @description Update deployment
 *
 * @name AppsAppNameDeploymentsDeploymentNamePartialUpdate
 * @request PATCH:/management/apps/:appName/deployments/:deploymentName
 * @response `200` `{
    deployment: {
    id: string,
    name: string,
    key: string,
    package?: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},
    createdTime: number,

},

}` Deployment updated successfully
 */
    appsAppNameDeploymentsDeploymentNamePartialUpdate: (
      appName: string,
      deploymentName: string,
      data: AppsAppNameDeploymentsDeploymentNamePartialUpdatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          deployment: {
            id: string;
            name: string;
            key: string;
            package?: {
              /** @pattern ^\d+\.\d+\.\d+$ */
              appVersion: string;
              blobUrl: string;
              description?: string;
              diffPackageMap?: Record<
                string,
                {
                  size: number;
                  url: string;
                }
              >;
              isDisabled: boolean;
              isMandatory: boolean;
              label?: string;
              manifestBlobUrl: string;
              originalDeployment?: string;
              originalLabel?: string;
              packageHash: string;
              releasedBy?: string;
              releaseMethod?: "Upload" | "Promote" | "Rollback";
              /**
               * @min 0
               * @max 100
               */
              rollout?: number | null;
              size: number;
              uploadTime: number;
            };
            createdTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}/deployments/${deploymentName}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove deployment
     *
     * @name AppsAppNameDeploymentsDeploymentNameDelete
     * @request DELETE:/management/apps/:appName/deployments/:deploymentName
     * @response `204` `void` Deployment removed successfully
     */
    appsAppNameDeploymentsDeploymentNameDelete: (appName: string, deploymentName: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/management/apps/${appName}/deployments/${deploymentName}`,
        method: "DELETE",
        ...params,
      }),

    /**
 * @description Release new package version
 *
 * @name AppsAppNameDeploymentsDeploymentNameReleaseCreate
 * @request POST:/management/apps/:appName/deployments/:deploymentName/release
 * @response `201` `{
    package: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},

}` Package released successfully
 */
    appsAppNameDeploymentsDeploymentNameReleaseCreate: (
      appName: string,
      deploymentName: string,
      data: AppsAppNameDeploymentsDeploymentNameReleaseCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          package: {
            /** @pattern ^\d+\.\d+\.\d+$ */
            appVersion: string;
            blobUrl: string;
            description?: string;
            diffPackageMap?: Record<
              string,
              {
                size: number;
                url: string;
              }
            >;
            isDisabled: boolean;
            isMandatory: boolean;
            label?: string;
            manifestBlobUrl: string;
            originalDeployment?: string;
            originalLabel?: string;
            packageHash: string;
            releasedBy?: string;
            releaseMethod?: "Upload" | "Promote" | "Rollback";
            /**
             * @min 0
             * @max 100
             */
            rollout?: number | null;
            size: number;
            uploadTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}/deployments/${deploymentName}/release`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
 * @description Promote deployment to another deployment
 *
 * @name AppsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreate
 * @request POST:/management/apps/:appName/deployments/:sourceDeploymentName/promote/:destDeploymentName
 * @response `201` `{
    package: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},

}` Deployment promoted successfully
 */
    appsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreate: (
      appName: string,
      sourceDeploymentName: string,
      destDeploymentName: string,
      data: AppsAppNameDeploymentsSourceDeploymentNamePromoteDestDeploymentNameCreatePayload,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          package: {
            /** @pattern ^\d+\.\d+\.\d+$ */
            appVersion: string;
            blobUrl: string;
            description?: string;
            diffPackageMap?: Record<
              string,
              {
                size: number;
                url: string;
              }
            >;
            isDisabled: boolean;
            isMandatory: boolean;
            label?: string;
            manifestBlobUrl: string;
            originalDeployment?: string;
            originalLabel?: string;
            packageHash: string;
            releasedBy?: string;
            releaseMethod?: "Upload" | "Promote" | "Rollback";
            /**
             * @min 0
             * @max 100
             */
            rollout?: number | null;
            size: number;
            uploadTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}/deployments/${sourceDeploymentName}/promote/${destDeploymentName}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description Rollback deployment to previous release
 *
 * @name AppsAppNameDeploymentsDeploymentNameRollbackTargetReleaseCreate
 * @request POST:/management/apps/:appName/deployments/:deploymentName/rollback/:targetRelease?
 * @response `201` `{
    package: {
  \** @pattern ^\d+\.\d+\.\d+$ *\
    appVersion: string,
    blobUrl: string,
    description?: string,
    diffPackageMap?: Record<string,{
    size: number,
    url: string,

}>,
    isDisabled: boolean,
    isMandatory: boolean,
    label?: string,
    manifestBlobUrl: string,
    originalDeployment?: string,
    originalLabel?: string,
    packageHash: string,
    releasedBy?: string,
    releaseMethod?: "Upload" | "Promote" | "Rollback",
  \**
   * @min 0
   * @max 100
   *\
    rollout?: number | null,
    size: number,
    uploadTime: number,

},

}` Deployment rolled back successfully
 */
    appsAppNameDeploymentsDeploymentNameRollbackTargetReleaseCreate: (
      appName: string,
      deploymentName: string,
      targetRelease?: string,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          package: {
            /** @pattern ^\d+\.\d+\.\d+$ */
            appVersion: string;
            blobUrl: string;
            description?: string;
            diffPackageMap?: Record<
              string,
              {
                size: number;
                url: string;
              }
            >;
            isDisabled: boolean;
            isMandatory: boolean;
            label?: string;
            manifestBlobUrl: string;
            originalDeployment?: string;
            originalLabel?: string;
            packageHash: string;
            releasedBy?: string;
            releaseMethod?: "Upload" | "Promote" | "Rollback";
            /**
             * @min 0
             * @max 100
             */
            rollout?: number | null;
            size: number;
            uploadTime: number;
          };
        },
        any
      >({
        path: `/management/apps/${appName}/deployments/${deploymentName}/rollback/${targetRelease}?`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
 * @description List app collaborators
 *
 * @name AppsAppNameCollaboratorsList
 * @request GET:/management/apps/:appName/collaborators
 * @response `200` `{
    collaborators: Record<string,{
    accountId: string,
    permission: "Owner" | "Collaborator",
    isCurrentAccount?: boolean | null,

}>,

}` Collaborators retrieved successfully
 */
    appsAppNameCollaboratorsList: (appName: string, params: RequestParams = {}) =>
      this.http.request<
        {
          collaborators: Record<
            string,
            {
              accountId: string;
              permission: "Owner" | "Collaborator";
              isCurrentAccount?: boolean | null;
            }
          >;
        },
        any
      >({
        path: `/management/apps/${appName}/collaborators`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Add collaborator to app
     *
     * @name AppsAppNameCollaboratorsEmailCreate
     * @request POST:/management/apps/:appName/collaborators/:email
     * @response `201` `void` Collaborator added successfully
     */
    appsAppNameCollaboratorsEmailCreate: (appName: string, email: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/management/apps/${appName}/collaborators/${email}`,
        method: "POST",
        ...params,
      }),

    /**
     * @description Remove collaborator from app
     *
     * @name AppsAppNameCollaboratorsEmailDelete
     * @request DELETE:/management/apps/:appName/collaborators/:email
     * @response `204` `void` Collaborator removed successfully
     */
    appsAppNameCollaboratorsEmailDelete: (appName: string, email: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/management/apps/${appName}/collaborators/${email}`,
        method: "DELETE",
        ...params,
      }),

    /**
 * @description Get deployment metrics
 *
 * @name AppsAppNameDeploymentsDeploymentNameMetricsList
 * @request GET:/management/apps/:appName/deployments/:deploymentName/metrics
 * @response `200` `{
    metrics: Record<string,{
    active: number,
    downloads?: number,
    installed?: number,
    failed?: number,

}>,

}` Metrics retrieved successfully
 */
    appsAppNameDeploymentsDeploymentNameMetricsList: (
      appName: string,
      deploymentName: string,
      params: RequestParams = {},
    ) =>
      this.http.request<
        {
          metrics: Record<
            string,
            {
              active: number;
              downloads?: number;
              installed?: number;
              failed?: number;
            }
          >;
        },
        any
      >({
        path: `/management/apps/${appName}/deployments/${deploymentName}/metrics`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
