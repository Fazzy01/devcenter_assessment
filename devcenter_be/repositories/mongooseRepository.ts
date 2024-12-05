import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';

interface FindOptions {
    multiple?: boolean;
    count?: boolean;
    lean?: boolean;
  }


@Injectable()
export class MongooseRepository {
  private readonly collection: Model<any>;
//   private readonly loggerService: Logger;

  constructor(
    @InjectModel('User') private readonly userModel: Model<any>,
    // private readonly logger: Logger,
  ) {
    this.collection = userModel;
    // this.loggerService = logger;
  }

  async count(): Promise<number> {
    return this.collection.estimatedDocumentCount();
  }


  async find(query = {}, options: FindOptions = {}): Promise<any> {
    const { multiple = false, count, lean } = options;
    const results = multiple ? this.collection.find(query) : this.collection.findOne(query);

    if (count) {
      return results.countDocuments().exec();
    } else if (lean) {
      return results.lean().exec();
    } else {
      return results.exec();
    }
  }

  async create(body: any): Promise<any> {
    try {
      const document = new this.collection(body);
      return document.save();
    } catch (error) {
      this.onError(error, 'An error occured while creating the resource');
    }
  }

  async update(document: any, body: any = {}): Promise<any> {
    const id = typeof document._id !== 'undefined' ? document._id : document;
    return this.collection.findByIdAndUpdate(id, body, { new: true });
  }

  async remove(document: any): Promise<any> {
    const reloadedDocument = await this.reload(document);
    return reloadedDocument.remove();
  }

  async reload(document: any, options: any = {}): Promise<any> {
    const { select, populate, lean } = options;

    if (!select && !populate && !lean && document instanceof this.collection) {
      return document;
    }

    return typeof document._id !== 'undefined'
      ? this.collection.findById(document._id, null, { select, populate, lean })
      : this.collection.findById(document, null, { select, populate, lean });
  }

  onError(error: any, message: string): never {
    // this.loggerService.error(error.stack);
    if (error.name === 'MongoError' && error.code === 11000) {
      throw new Error('The resource already exists');
    }
    throw new Error(message || error.message);
  }
}
