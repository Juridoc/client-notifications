/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Profiles from '@juridoc/client-profiles';
/**
 * Notification entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Notification Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * List of target grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Notification section.
     */
    section: string;
    /**
     * Notification action.
     */
    action: string;
    /**
     * Notification parameters.
     */
    parameters: RestDB.Map<any>;
}
