package store

// Batch is a write-only database that commits changes to the underlying database
// when Write is called. A batch cannot be used concurrently.
type Batch interface {
	Writer

	// Size retrieves the amount of data queued up for writing, this includes
	// the keys, values, and deleted keys.
	Size() int

	// Write flushes any accumulated data to disk.
	Write() error

	// Reset resets the batch.
	Reset()
}

// Batcher defines an interface for creating batches with a backing data store.
type Batcher interface {
	// NewBatch creates a write-only database that buffers changes to the underlying
	// db until a final write is called.
	NewBatch() Batch
}
